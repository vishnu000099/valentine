import React, { useState, useEffect } from 'react';

const photos = [
    "/assets/uploaded_media_0_1770225427997.jpg",
    "/assets/uploaded_media_1_1770225427997.jpg",
    "/assets/uploaded_media_2_1770225427997.jpg",
    "/assets/uploaded_media_3_1770225427997.jpg",
    "/assets/uploaded_media_4_1770225427997.jpg"
];

const MemoryRecap = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % photos.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            backgroundColor: 'var(--color-white)',
            padding: 'var(--spacing-md)',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-soft)',
            textAlign: 'center',
            overflow: 'hidden'
        }}>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Our Memory Lane 🎞️</h3>

            <div style={{
                width: '100%',
                height: '300px',
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden'
            }}>
                {photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        alt="Memory"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: index === currentIndex ? 1 : 0,
                            transition: 'opacity 1s ease-in-out',
                            animation: index === currentIndex ? 'kenburns 5s ease-out forwards' : 'none'
                        }}
                    />
                ))}
            </div>

            <style>{`
        @keyframes kenburns {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
        </div>
    );
};

export default MemoryRecap;
