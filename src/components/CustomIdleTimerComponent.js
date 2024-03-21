import { useEffect } from "react";

const CustomIdleTimerComponent = ({ onLogout }) => {
    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem("windowClosedAt", Date.now());
        };

        const handleWindowFocus = () => {
            const windowClosedAt = localStorage.getItem("windowClosedAt");
            const thirtyMinutesInMilliseconds = 2 * 60 * 1000;
            const currentTime = Date.now();

            if (windowClosedAt) {
                const timeSinceWindowClosed =
                    currentTime - parseInt(windowClosedAt, 10);

                if (timeSinceWindowClosed > thirtyMinutesInMilliseconds) {
                    onLogout();
                }
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        window.addEventListener("focus", handleWindowFocus);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
            window.removeEventListener("focus", handleWindowFocus);
        };
    }, [onLogout]);

    return null;
};

export default CustomIdleTimerComponent;
