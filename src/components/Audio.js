import React, { useState, useEffect } from 'react';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.createRef();

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        // Auto play when the component mounts
        audioRef.current.play();
        setIsPlaying(true);
    }, []); // empty dependency array ensures this effect runs only once on mount

    return (
        <div>
            <audio ref={audioRef} src="/image/song.mp3" autoPlay />
            <button onClick={handlePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    );
};

export default AudioPlayer;
