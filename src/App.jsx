import React, { useState, useEffect } from 'react';
import { Monitor, HardDrive, FileText } from 'lucide-react';
import WindowFrame from './components/os/WindowFrame';
import Taskbar from './components/os/Taskbar';
import DesktopIcon from './components/os/DesktopIcon';
import ExplorerApp from './apps/ExplorerApp';
import FileViewerApp from './apps/FileViewerApp';
import { fileSystemData } from './data/fileSystem';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  // --- Window Management State ---
  const [windows, setWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);
  const [nextZIndex, setNextZIndex] = useState(100);
  const [selectedIconId, setSelectedIconId] = useState(null);

  // --- Window Actions ---

  const openWindow = (type, props = {}) => {
    const id = props.id || `${type}-${Date.now()}`;

    // Check if window already exists (optional, for single instance apps like Explorer root)
    const existingWindow = windows.find(w => w.id === id);
    if (existingWindow) {
      focusWindow(id);
      if (existingWindow.isMinimized) {
        setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: false } : w));
      }
      return;
    }

    const newWindow = {
      id,
      type,
      title: props.title || 'Window',
      icon: props.icon || Monitor,
      contentProps: props,
      zIndex: nextZIndex,
      isMinimized: false,
      isMaximized: false,
      position: { x: 50 + (windows.length * 20), y: 50 + (windows.length * 20) },
      size: { width: 800, height: 600 }
    };

    setWindows([...windows, newWindow]);
    setActiveWindowId(id);
    setNextZIndex(prev => prev + 1);
  };

  const closeWindow = (id) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const focusWindow = (id) => {
    // Always bring to front, even if already active (to handle z-index stacking if needed)
    setActiveWindowId(id);
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: nextZIndex } : w));
    setNextZIndex(prev => prev + 1);
  };

  const toggleMinimize = (id) => {
    const win = windows.find(w => w.id === id);
    if (!win) return;

    const willMinimize = !win.isMinimized;

    if (willMinimize) {
      // Minimizing
      setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
      // Optional: Clear active window if it was the minimized one? 
      // Windows keeps it active but invisible until you click something else. 
      // We'll keep it active to support the toggle logic (Active & Minimized -> Restore).
    } else {
      // Restoring
      setActiveWindowId(id);
      setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: false, zIndex: nextZIndex } : w));
      setNextZIndex(prev => prev + 1);
    }
  };

  const toggleMaximize = (id) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w));
    focusWindow(id);
  };

  const updateWindowPosition = (id, pos) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, position: pos } : w));
  };

  const updateWindowSize = (id, size) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, size: size } : w));
  };

  // --- App Launchers ---

  const openExplorer = () => {
    openWindow('explorer', {
      id: 'explorer-root',
      title: '此电脑',
      icon: Monitor
    });
  };

  const openFileViewer = (file) => {
    openWindow('file-viewer', {
      id: `file-${file.id}`,
      title: file.name,
      icon: FileText,
      file: file
    });
  };

  // --- Render Content ---

  const renderWindowContent = (win) => {
    switch (win.type) {
      case 'explorer':
        return <ExplorerApp onOpenFile={openFileViewer} />;
      case 'file-viewer':
        return <FileViewerApp file={win.contentProps.file} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden bg-[url('/wallpaper.png')] bg-cover bg-center font-sans relative select-none"
      onMouseDown={() => { setActiveWindowId(null); setSelectedIconId(null); }} // Click desktop to defocus and deselect
    >
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-4 z-0">
        <DesktopIcon
          icon={Monitor}
          label="此电脑"
          isSelected={selectedIconId === 'this-pc'}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedIconId(selectedIconId === 'this-pc' ? null : 'this-pc');
          }}
          onDoubleClick={(e) => {
            e.stopPropagation();
            setSelectedIconId(null);
            openExplorer();
          }}
        />
        {/* Add more desktop icons here if needed */}
      </div>

      {/* Windows */}
      {windows.map(win => (
        <WindowFrame
          key={win.id}
          id={win.id}
          title={win.title}
          icon={win.icon}
          isActive={activeWindowId === win.id}
          isMaximized={win.isMaximized}
          isMinimized={win.isMinimized}
          position={win.position}
          size={win.size}
          zIndex={win.zIndex}
          onClose={closeWindow}
          onMinimize={toggleMinimize}
          onMaximize={toggleMaximize}
          onFocus={focusWindow}
          onMove={updateWindowPosition}
          onResize={updateWindowSize}
        >
          <ErrorBoundary>
            {renderWindowContent(win)}
          </ErrorBoundary>
        </WindowFrame>
      ))}

      {/* Taskbar */}
      <Taskbar
        windows={windows}
        activeWindowId={activeWindowId}
        onWindowClick={(id) => {
          const win = windows.find(w => w.id === id);
          if (win.id === activeWindowId && !win.isMinimized) {
            toggleMinimize(id);
          } else {
            if (win.isMinimized) toggleMinimize(id);
            focusWindow(id);
          }
        }}
      />
    </div>
  );
};

export default App;