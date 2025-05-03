import React from 'react';

interface CardBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const CardBackground: React.FC<CardBackgroundProps> = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`bg-white/30 bg-opacity-60 backdrop-blur-md p-4 rounded-xl shadow-sm font-body ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default CardBackground;