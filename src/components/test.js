import React, { useEffect } from 'react';

function YourComponent() {
    useEffect(() => {
        // Define handleLoadMore function inside useEffect
        const handleLoadMore = () => {
            // Your logic for handling the load more functionality
            console.log('Load more clicked');
        };

        // Attach event listener directly inside useEffect
        const loadBtn = document.querySelector('.load-btn');
        if (loadBtn) {
            loadBtn.addEventListener('click', handleLoadMore);
        }

        // Cleanup function
        return () => {
            if (loadBtn) {
                loadBtn.removeEventListener('click', handleLoadMore);
            }
        };
    }, []); // Empty dependency array means this effect will only run once after initial render

    return (
        <div className='text-center pt-10'>
            <button className='px-5 py-3 bg-[var(--theme-primary-color)] text-white load-btn'>Load More</button>
        </div>
    );
}

export default YourComponent;
