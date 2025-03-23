import React from 'react';

const BlurBackdrop = ({ isOpen, onClose }) => {
    return (
        <div
            className={`blur fixed z-5 top-0 left-0 h-screen w-screen bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        ></div>
    );
};

export default BlurBackdrop;