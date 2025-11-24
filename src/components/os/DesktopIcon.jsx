import React from 'react';

const DesktopIcon = ({ icon: Icon, label, onClick, onDoubleClick, isSelected }) => {
    return (
        <div
            onClick={onClick}
            onDoubleClick={onDoubleClick}
            className={`
        flex flex-col items-center gap-1 p-2 rounded-md cursor-pointer w-24 group
        ${isSelected ? 'bg-blue-100/50 border border-blue-200/50' : 'hover:bg-white/10 border border-transparent'}
      `}
        >
            <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg shadow-sm backdrop-blur-sm transition-colors">
                <Icon size={32} className="text-white drop-shadow-md" />
            </div>
            <span className="text-xs text-white font-medium text-center drop-shadow-md select-none px-1 rounded bg-black/20 group-hover:bg-black/30 transition-colors">
                {label}
            </span>
        </div>
    );
};

export default DesktopIcon;
