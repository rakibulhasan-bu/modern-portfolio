import React from 'react';

const Layout = ({ children, className = '' }) => {
    return (
        <div className={`bg-light dark:bg-dark container mx-auto px-4 lg:px-32 ${className}`}>
            {children}
        </div>
    );
};

export default Layout;