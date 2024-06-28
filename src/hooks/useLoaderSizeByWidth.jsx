import { useState, useEffect } from 'react';

// Custom hook to determine the loader size based on device width
export default function useLoaderSizeByWidth() {
    const [loaderSize, setLoaderSize] = useState(18); // Default size

    useEffect(() => {
        function handleResize() {
            const deviceWidth = window.innerWidth;
            const newSize = deviceWidth > 768 ? 15 : 12; // Set size based on device width
            setLoaderSize(newSize);
        }

        // Initial resize
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to run the effect only once

    return loaderSize;
}
