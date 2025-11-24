import React, { useState, useEffect, useRef } from 'react';
import { X, Minus, Square, Maximize2 } from 'lucide-react';

const WindowFrame = ({
    id,
    title,
    icon: Icon,
    children,
    isActive,
    isMaximized,
    isMinimized,
    position,
    size,
    onClose,
    onMinimize,
    onMaximize,
    onFocus,
    onMove,
    onResize,
    zIndex
}) => {
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [isResizing, setIsResizing] = useState(false);
    const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });

    const windowRef = useRef(null);

    // --- Dragging Logic ---
    const handleMouseDown = (e) => {
        if (isMaximized) return;
        if (e.target.closest('.window-controls')) return; // Don't drag if clicking controls

        onFocus(id);
        setIsDragging(true);
        setDragOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
                onMove(id, {
                    x: e.clientX - dragOffset.x,
                    y: e.clientY - dragOffset.y
                });
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragOffset, id, onMove]);

    // --- Resizing Logic ---
    const handleResizeMouseDown = (e) => {
        e.stopPropagation();
        setIsResizing(true);
        setResizeStart({
            x: e.clientX,
            y: e.clientY,
            width: size.width,
            height: size.height
        });
    };

    useEffect(() => {
        const handleResizeMove = (e) => {
            if (isResizing) {
                onResize(id, {
                    width: Math.max(300, resizeStart.width + (e.clientX - resizeStart.x)),
                    height: Math.max(200, resizeStart.height + (e.clientY - resizeStart.y))
                });
            }
        };

        const handleResizeUp = () => {
            setIsResizing(false);
        };

        if (isResizing) {
            window.addEventListener('mousemove', handleResizeMove);
            window.addEventListener('mouseup', handleResizeUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleResizeMove);
            window.removeEventListener('mouseup', handleResizeUp);
        };
    }, [isResizing, resizeStart, id, onResize]);

    if (isMinimized) return null;

    const style = isMaximized
        ? { top: 0, left: 0, width: '100%', height: 'calc(100% - 48px)' } // Subtract taskbar height
        : { top: position.y, left: position.x, width: size.width, height: size.height };

    return (
        <div
            ref={windowRef}
            className={`absolute flex flex-col bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden transition-shadow duration-200 ${isActive ? 'ring-1 ring-black/5 shadow-xl' : ''}`}
            style={{ ...style, zIndex: zIndex }}
            onMouseDown={() => onFocus(id)}
        >
            {/* Title Bar */}
            <div
                className={`h-10 flex items-center justify-between px-3 select-none ${isActive ? 'bg-gray-100' : 'bg-gray-50'} border-b border-gray-200`}
                onMouseDown={handleMouseDown}
                onDoubleClick={() => onMaximize(id)}
            >
                <div className="flex items-center gap-2 overflow-hidden">
                    {Icon && <Icon size={16} className="text-gray-600" />}
                    <span className="text-sm font-medium text-gray-700 truncate">{title}</span>
                </div>

                <div className="flex items-center gap-1 window-controls">
                    <button onClick={(e) => { e.stopPropagation(); onMinimize(id); }} className="p-1.5 hover:bg-gray-200 rounded text-gray-500">
                        <Minus size={14} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); onMaximize(id); }} className="p-1.5 hover:bg-gray-200 rounded text-gray-500">
                        {isMaximized ? <Square size={12} /> : <Maximize2 size={12} />}
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); onClose(id); }} className="p-1.5 hover:bg-red-500 hover:text-white rounded text-gray-500 transition-colors">
                        <X size={14} />
                    </button>
                </div>
            </div >

            {/* Content */}
            < div className="flex-1 overflow-hidden relative" >
                {children}

                {/* Resize Handle */}
                {
                    !isMaximized && (
                        <div
                            className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize z-20"
                            onMouseDown={handleResizeMouseDown}
                        />
                    )
                }
            </div >
        </div >
    );
};

export default WindowFrame;
