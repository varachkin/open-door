import { useEffect } from "react";

export const FingerAnimated = () => {

    // useEffect(() => {
    //     window.onload = () => {
    //         document.querySelector(".path").style.animation = "swipe-dot 2s 0.5s infinite";

    //         document.querySelector(".hand-icon").style.animation = "swipe-hand 2s infinite";

    //     }
    // })

    return (
        <div className="swipe">
            <div className="path"></div>
            <div className="hand-icon"></div>
        </div>
    )
}