import React, { useState, useEffect, useMemo } from 'react';
import {
    Folder,
    FileText,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    Search,
    Monitor,
    HardDrive,
    ChevronRight,
    ChevronDown,
    Minus,
    Maximize2,
    X,
    Github
} from 'lucide-react';
import { fileSystemData } from '../data/fileSystem';
import { resolvePath, findPathToNode, searchFileSystem } from '../utils/fileSystemHelpers';

// --- Helper Components ---

// Get specific file icon
const getFileIcon = (fileName, size = 32, className = "") => {
    const props = { size, className };
    return <FileText {...props} className={`text-slate-500 ${className}`} />;
};

// Sidebar Tree Item
const TreeItem = ({ node, currentPath, onNavigate, depth = 0 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!node) return null;

    const isActive = currentPath.some(p => p && p.id === node.id);
    const lastNode = currentPath[currentPath.length - 1];
    const isCurrentFolder = lastNode && lastNode.id === node.id;
    const hasChildren = (node.type === 'folder' || node.type === 'drive' || node.type === 'root') && node.children && node.children.length > 0;

    useEffect(() => {
        if (isActive && hasChildren && !isCurrentFolder) {
            setIsExpanded(true);
        }
    }, [isActive, hasChildren, isCurrentFolder]);

    const handleClick = (e) => {
        e.stopPropagation();
        if (node.type === 'folder' || node.type === 'drive' || node.type === 'root') {
            onNavigate(node);
        }
    };

    const handleDoubleClick = (e) => {
        e.stopPropagation();
        if (hasChildren) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <div className="select-none">
            <div
                className={`
          flex items-center py-1 px-2 cursor-pointer text-sm rounded-md mx-1
          ${isCurrentFolder ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100 text-gray-700'}
        `}
                style={{ paddingLeft: `${depth * 12 + 8}px` }}
                onClick={handleClick}
                onDoubleClick={handleDoubleClick}
            >
                <span
                    className="mr-1 w-4 h-4 flex items-center justify-center text-gray-400 flex-shrink-0 hover:bg-gray-200 rounded-sm transition-colors"
                    onClick={(e) => {
                        e.stopPropagation();
                        if (hasChildren) setIsExpanded(!isExpanded);
                    }}
                >
                    {hasChildren && (
                        isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />
                    )}
                </span>

                <div className="flex-shrink-0 flex items-center">
                    {node.id === 'root' ? (
                        <Monitor
                            size={16}
                            className={`mr-2 ${isCurrentFolder ? 'text-purple-500' : 'text-gray-500'}`}
                        />
                    ) : node.type === 'drive' ? (
                        <HardDrive
                            size={16}
                            className={`mr-2 ${isCurrentFolder ? 'text-gray-700' : 'text-gray-500'}`}
                        />
                    ) : node.type === 'folder' ? (
                        <Folder
                            size={16}
                            className={`mr-2 ${isCurrentFolder ? 'fill-blue-400 text-blue-400' : 'fill-yellow-400 text-yellow-400'}`}
                        />
                    ) : (
                        <div className="mr-2">
                            {getFileIcon(node.name, 16)}
                        </div>
                    )}
                </div>

                <span className="truncate min-w-0 flex-1">{node.name}</span>
            </div>

            {hasChildren && isExpanded && (
                <div>
                    {node.children.map((child) => (
                        <TreeItem
                            key={child.id}
                            node={child}
                            currentPath={currentPath}
                            onNavigate={onNavigate}
                            depth={depth + 1}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// --- Explorer App Component ---
const ExplorerApp = ({ initialPath = [], onOpenFile }) => {
    if (!fileSystemData) {
        return <div className="p-4 text-red-500">Critical Error: fileSystemData is missing!</div>;
    }

    // Internal navigation state (since we are inside a window, we manage our own history/path)
    // We initialize with the path passed from props or root
    const [currentPath, setCurrentPath] = useState(initialPath.length > 0 ? initialPath : [fileSystemData]);
    const [history, setHistory] = useState([initialPath.length > 0 ? initialPath : [fileSystemData]]);
    const [historyIndex, setHistoryIndex] = useState(0);

    const [selectedItemIds, setSelectedItemIds] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Sidebar Resizing State
    const [sidebarWidth, setSidebarWidth] = useState(256);
    const [isResizing, setIsResizing] = useState(false);

    const currentFolder = currentPath[currentPath.length - 1];

    // --- Navigation Logic ---
    const navigateTo = (newPath) => {
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push(newPath);
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
        setCurrentPath(newPath);
        setSelectedItemIds([]);
        setSearchQuery('');
    };

    const navigateToFolder = (folderNode) => {
        if (!currentFolder) return; // Safety check
        if (folderNode.id === currentFolder.id) return;
        const pathNodes = findPathToNode(fileSystemData, folderNode.id);
        if (pathNodes) {
            navigateTo(pathNodes);
        }
    };

    const goBack = () => {
        if (historyIndex > 0) {
            setHistoryIndex(historyIndex - 1);
            setCurrentPath(history[historyIndex - 1]);
            setSelectedItemIds([]);
        }
    };

    const goForward = () => {
        if (historyIndex < history.length - 1) {
            setHistoryIndex(historyIndex + 1);
            setCurrentPath(history[historyIndex + 1]);
            setSelectedItemIds([]);
        }
    };

    const goUp = () => {
        if (currentPath.length > 1) {
            const parentPath = currentPath.slice(0, currentPath.length - 1);
            navigateTo(parentPath);
        }
    };

    // --- Interaction Logic ---
    const handleItemClick = (item) => {
        setSelectedItemIds([item.id]);
    };

    const handleItemDoubleClick = (item) => {
        if (item.type === 'folder' || item.type === 'drive') {
            navigateToFolder(item);
        } else {
            onOpenFile(item);
        }
    };

    const handleBreadcrumbClick = (index) => {
        const newPath = currentPath.slice(0, index + 1);
        navigateTo(newPath);
    };

    // --- Sidebar Resize Logic ---
    const startResizing = React.useCallback(() => {
        setIsResizing(true);
    }, []);

    const stopResizing = React.useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = React.useCallback((mouseMoveEvent) => {
        if (isResizing) {
            const sidebar = document.getElementById('explorer-sidebar'); // We'll use a specific ID
            if (sidebar) {
                const newWidth = mouseMoveEvent.clientX - sidebar.getBoundingClientRect().left;
                if (newWidth > 160 && newWidth < 480) {
                    setSidebarWidth(newWidth);
                }
            }
        }
    }, [isResizing]);

    useEffect(() => {
        if (isResizing) {
            window.addEventListener("mousemove", resize);
            window.addEventListener("mouseup", stopResizing);
        }
        return () => {
            window.removeEventListener("mousemove", resize);
            window.removeEventListener("mouseup", stopResizing);
        };
    }, [isResizing, resize, stopResizing]);


    // --- Render ---
    const displayedItems = useMemo(() => {
        if (searchQuery) {
            return searchFileSystem(fileSystemData, searchQuery);
        }
        return (currentFolder && currentFolder.children) || [];
    }, [searchQuery, currentFolder]);

    if (!currentFolder) {
        return <div className="p-4 text-red-500">Error: Invalid path</div>;
    }

    return (
        <div className="flex flex-col h-full w-full bg-white">
            {/* Top Bar */}
            <div className="h-10 bg-[#f3f3f3] flex items-center px-2 gap-2 border-b border-gray-200 select-none flex-shrink-0">
                <div className="flex items-center gap-1 text-gray-500">
                    <button onClick={goBack} disabled={historyIndex === 0} className={`p-1 rounded hover:bg-gray-200 ${historyIndex === 0 ? 'opacity-30' : ''}`}>
                        <ArrowLeft size={16} />
                    </button>
                    <button onClick={goForward} disabled={historyIndex === history.length - 1} className={`p-1 rounded hover:bg-gray-200 ${historyIndex === history.length - 1 ? 'opacity-30' : ''}`}>
                        <ArrowRight size={16} />
                    </button>
                    <button onClick={goUp} disabled={currentPath.length <= 1} className={`p-1 rounded hover:bg-gray-200 ${currentPath.length <= 1 ? 'opacity-30' : ''}`}>
                        <ArrowUp size={16} />
                    </button>
                </div>

                <div className="flex-1 h-7 bg-white rounded border border-gray-200 flex items-center px-2 text-sm mx-2">
                    <Monitor size={12} className="text-gray-400 mr-2" />
                    <ChevronRight size={12} className="text-gray-400 mr-2" />
                    <div className="flex items-center overflow-hidden whitespace-nowrap">
                        {currentPath.map((node, index) => (
                            <div key={node.id} className="flex items-center">
                                <span className="px-1 hover:bg-gray-100 cursor-pointer rounded text-gray-600" onClick={() => handleBreadcrumbClick(index)}>
                                    {node.id === 'root' ? '此电脑' : node.name}
                                </span>
                                {index < currentPath.length - 1 && <ChevronRight size={10} className="text-gray-400 mx-0.5" />}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-48 h-7 bg-white rounded border border-gray-200 flex items-center px-2">
                    <Search size={12} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="搜索"
                        className="w-full bg-transparent border-none outline-none text-xs ml-2 text-gray-600"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar */}
                <div
                    id="explorer-sidebar"
                    className="bg-[#fbfbfb] border-r border-gray-200 py-2 flex flex-col overflow-y-auto custom-scrollbar relative flex-shrink-0"
                    style={{ width: sidebarWidth }}
                >
                    <div className="px-2">
                        <TreeItem
                            node={fileSystemData}
                            currentPath={currentPath}
                            onNavigate={navigateToFolder}
                        />
                    </div>
                    <div
                        className="absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-blue-400 transition-colors z-10"
                        onMouseDown={startResizing}
                    />
                </div>

                {/* File Grid */}
                <div className="flex-1 bg-white p-4 overflow-y-auto" onClick={() => setSelectedItemIds([])}>
                    {displayedItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                            <span className="text-4xl mb-4">📂</span>
                            <p>此文件夹为空</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-y-4 gap-x-2">
                            {displayedItems.map((item) => {
                                const isSelected = selectedItemIds.includes(item.id);
                                return (
                                    <div
                                        key={item.id}
                                        className={`
                      group flex flex-col items-center p-2 rounded border 
                      transition-all duration-100 cursor-default
                      ${isSelected ? 'bg-blue-50/80 border-blue-200 shadow-sm' : 'bg-transparent border-transparent hover:bg-gray-50 hover:border-gray-100'}
                    `}
                                        onClick={(e) => { e.stopPropagation(); handleItemClick(item); }}
                                        onDoubleClick={(e) => { e.stopPropagation(); handleItemDoubleClick(item); }}
                                    >
                                        <div className="w-10 h-10 mb-1 flex items-center justify-center">
                                            {item.type === 'drive' ? (
                                                <HardDrive size={40} className="text-gray-600" strokeWidth={1.5} />
                                            ) : item.type === 'folder' ? (
                                                <div className="relative">
                                                    <Folder size={40} className="fill-yellow-400 text-yellow-400 drop-shadow-sm" strokeWidth={1.5} />
                                                    <div className="absolute bottom-1 left-1 w-7 h-0.5 bg-yellow-200/50"></div>
                                                </div>
                                            ) : (
                                                <div className="bg-white w-8 h-10 rounded shadow-sm border border-gray-200 flex items-center justify-center">
                                                    {getFileIcon(item.name, 24)}
                                                </div>
                                            )}
                                        </div>
                                        <span className={`text-xs text-center break-words w-full line-clamp-2 px-1 rounded ${isSelected ? 'text-gray-900 font-medium' : 'text-gray-700'}`}>
                                            {item.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* Status Bar */}
            <div className="h-6 bg-[#f3f3f3] border-t border-gray-200 flex items-center px-3 text-xs text-gray-500 gap-3 select-none flex-shrink-0">
                <span>{displayedItems.length} 个项目</span>
                <div className="flex-1"></div>
                <Monitor size={10} className="text-gray-400" />
            </div>
        </div>
    );
};

export default ExplorerApp;
