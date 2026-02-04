import React from 'react';

const timelineEvents = [
    {
        title: "How We Met",
        date: "The Beginning",
        description: "The moment our paths crossed and everything changed. Even then, I knew there was something special about you.",
        image: "/assets/uploaded_media_0_1770225427997.jpg"
    },
    {
        title: "Our Favorite Memories",
        date: "Growing Closer",
        description: "From our little jokes to our long conversations. Every second spent with you is a memory I cherish forever.",
        image: "/assets/uploaded_media_1_1770225427997.jpg"
    },
    {
        title: "Moments That Changed My Life",
        date: "Forever Us",
        description: "You've shown me what true love really is. You are my first and my last love.",
        image: "/assets/uploaded_media_2_1770225427997.jpg"
    }
];

const OurStory = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: 'var(--spacing-xl)', color: 'var(--color-text-dark)' }}>Our Story</h2>

                <div className="timeline" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '2px',
                        height: '100%',
                        backgroundColor: 'var(--color-gold)',
                        opacity: 0.3
                    }}></div>

                    {timelineEvents.map((event, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                            paddingBottom: 'var(--spacing-xl)',
                            position: 'relative'
                        }}>
                            {/* Content Card */}
                            <div className="timeline-card" style={{
                                width: '45%',
                                backgroundColor: 'var(--color-white)',
                                padding: 'var(--spacing-md)',
                                borderRadius: '8px',
                                boxShadow: 'var(--shadow-soft)',
                                position: 'relative',
                                zIndex: 1,
                                textAlign: index % 2 === 0 ? 'left' : 'right',
                                left: index % 2 === 0 ? '-50px' : '50px' /* Offset from center slightly */
                            }}>
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover',
                                        borderRadius: '4px',
                                        marginBottom: 'var(--spacing-sm)'
                                    }}
                                />
                                <span style={{
                                    display: 'block',
                                    fontFamily: 'var(--font-script)',
                                    fontSize: '1.5rem',
                                    color: 'var(--color-gold)',
                                    marginBottom: '4px'
                                }}>
                                    {event.date}
                                </span>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>{event.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>{event.description}</p>
                            </div>

                            {/* Heart Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '20px',
                                transform: 'translateX(-50%)',
                                width: '20px',
                                height: '20px',
                                backgroundColor: 'var(--color-blush)',
                                borderRadius: '50%',
                                border: '4px solid var(--color-white)',
                                zIndex: 2,
                                boxShadow: '0 0 0 2px var(--color-gold)'
                            }}></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile adjustments would go in CSS media queries, putting verifying in verification step */}
        </section>
    );
};

export default OurStory;
