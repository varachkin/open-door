    import React, { useState, useEffect } from 'react';

export const ButtonTimer = ({ children, variant, onClick, callback, status, timer = 9 }) => {
    const [countdown, setCountdown] = useState(timer);
    const [disabled, setDisabled] = useState(false)
    let intervalID;

    const handleClick = ()=> {
        clearInterval(intervalID);
        if(onClick) onClick()
    }

    useEffect(() => {
        if (countdown > 0) {
            intervalID = setInterval(() => {
                if (countdown > 0) {
                    if(countdown <= (Math.round(timer / 3)) && !disabled){
                        setDisabled(true)
                    }
                    setCountdown((prev) => prev - 1);
                } else {
                    clearInterval(intervalID);
                    // If you want to perform a callback when the timer reaches 0, you can call it here
                    if (callback) {
                        callback();
                    }
                }
            }, 1000);
        } else {
            if (callback) {
                callback()
            }

        }

        return () => clearInterval(intervalID);
    }, [countdown]);


    return (
        <button
            className={`button light ${status === 'error' ? 'error' : status === 'success' ? 'success' : 'default'} ${disabled ? 'disabled' : ''}`}
            onClick={handleClick}
            disabled={disabled}
        >
            <div id="countdown">
                <div id="countdown-number">{countdown}</div>
                <svg>
                    <circle r="40%" cx="50%" cy="50%" style={{ '--timer-value': timer + 's' }}></circle>
                </svg>
            </div>
            {children}
        </button>
    );
};