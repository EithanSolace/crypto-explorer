import React from 'react';
import { Monitor } from 'lucide-react';

const Taskbar = ({ windows, activeWindowId, onWindowClick }) => {
  return (
    <div className="h-12 bg-[#f3f3f3]/90 backdrop-blur-md border-t border-white/20 fixed bottom-0 left-0 right-0 flex items-center px-4 gap-2 z-[100] shadow-lg justify-start">
      {/* Window Tokens */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
        {windows.map((win) => {
          const isActive = win.id === activeWindowId && !win.isMinimized;
          return (
            <div
              key={win.id}
              onClick={(e) => { e.stopPropagation(); onWindowClick(win.id); }}
              onMouseDown={(e) => e.stopPropagation()}
              className={`
                flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-all min-w-[140px] max-w-[200px]
                ${isActive
                  ? 'bg-white shadow-sm border border-gray-200'
                  : 'hover:bg-white/50 border border-transparent hover:border-gray-200/50'
                }
              `}
            >
              {win.icon && <win.icon size={18} className={isActive ? 'text-blue-600' : 'text-gray-500'} />}
              <span className="text-xs text-gray-700 truncate select-none">{win.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Taskbar;
