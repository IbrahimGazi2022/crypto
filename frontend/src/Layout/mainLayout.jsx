import React from 'react';

const mainLayout = ({ children }) => {
    return (
        <div className="w-full">
            <div className="max-w-[1180px] mx-auto">
                {children}
            </div>
        </div>
    );
};

export default mainLayout;
