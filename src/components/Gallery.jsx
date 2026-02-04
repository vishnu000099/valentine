import React from 'react';

const photos = [
    { src: "/assets/uploaded_media_0_1770225427997.jpg", caption: "Just Us" },
    { src: "/assets/uploaded_media_1_1770225427997.jpg", caption: "My Happiness" },
    { src: "/assets/uploaded_media_2_1770225427997.jpg", caption: "Every Moment Counts" },
    { src: "/assets/uploaded_media_3_1770225427997.jpg", caption: "The Way You Smile" },
    { src: "/assets/uploaded_media_4_1770225427997.jpg", caption: "Forever & Always" },
];

const Gallery = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: 'var(--spacing-xl)', color: 'var(--color-text-dark)' }}>Captured Moments</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-md)'
                }}>
                    {photos.map((photo, index) => (
                        <div key={index} className="gallery-item" style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', boxShadow: 'var(--shadow-soft)', cursor: 'pointer', aspectRatio: '1/1' }}>
                            <img
                                src={photo.src}
                                alt={photo.caption}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                            />
                            <div className="overlay" style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: 'var(--spacing-md)',
                                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                color: 'var(--color-white)',
                                transform: 'translateY(100%)',
                                transition: 'transform 0.3s ease'
                            }}>
                                <p style={{ fontFamily: 'var(--font-script)', fontSize: '1.5rem' }}>{photo.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .gallery-item:hover img {
          transform: scale(1.1);
        }
        .gallery-item:hover .overlay {
          transform: translateY(0);
        }
      `}</style>
        </section>
    );
};

export default Gallery;
