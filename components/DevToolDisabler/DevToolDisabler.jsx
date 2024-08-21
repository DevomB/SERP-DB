"use client";
import { useEffect } from "react";

const DevToolDisabler = ({ children }) => {
	useEffect(() => {
		if (process.env.NODE_ENV === "production") {
			// Disable F12 (Developer Tools) and other key combinations if needed
			const handleKeyPress = (e) => {
				if (e.key === "F12" || e.ctrlKey || e.shiftKey) {
					e.preventDefault();
				}
			};

			// Disable context menu
			const handleContextMenu = (e) => {
				e.preventDefault();
			};

			document.addEventListener("keydown", handleKeyPress);
			document.addEventListener("contextmenu", handleContextMenu);

			return () => {
				document.removeEventListener("keydown", handleKeyPress);
				document.removeEventListener("contextmenu", handleContextMenu);
			};
		}
	}, []);

	return <>{children}</>;
};

export default DevToolDisabler;

/*

        ! THIS WAS THE OLD CODE... IF WE NEED AGAIN WE KEEP HERE

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey) {
                event.preventDefault();
            }
            if (event.keyCode === 123) { // F12 key
                event.preventDefault();
            }
        };

        const handleContextMenu = (event) => {
            event.preventDefault();
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.addEventListener('contextmenu', handleContextMenu);

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
*/
