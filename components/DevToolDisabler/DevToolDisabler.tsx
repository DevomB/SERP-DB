'use client'
import React, { useEffect } from 'react';

const DevToolDisabler = ({ children }:any) => {
    useEffect(() => {
        const handleKeyDown = (event:any) => { // Check if this type is proper
            if (event.ctrlKey) {
                event.preventDefault();
            }
            if (event.keyCode === 123) { // F12 key
                event.preventDefault();
            }
        };

        const handleContextMenu = (event:any) => { // Check if this is proper
            event.preventDefault();
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.addEventListener('contextmenu', handleContextMenu);

        // Cleanup the event listeners on component unmount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    return (
        <>
            {children}
        </>
    );
};

export default DevToolDisabler;
