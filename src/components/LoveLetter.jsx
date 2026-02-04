import React, { useState, useEffect, useRef } from 'react';

const letterContent = `My Dearest Noonu,

I wanted to create this little space just for you, to remind you of how incredibly special you are to me.

From the moment you walked into my life, everything became brighter. You are my joy, my peace, and my greatest adventure.

Thank you for being you. For your kindness, your laughter, and the love you give so freely.

I love you more than words can say.

Forever yours,
Vishnu`;

const LoveLetter = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [started, setStarted] = useState(false);
    const letterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        if (letterRef.current) {
            observer.observe(letterRef.current);
        }

        return () => {
            if (letterRef.current) observer.unobserve(letterRef.current);
        };
    }, []);

    useEffect(() => {
        if (started && displayedText.length < letterContent.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(letterContent.slice(0, displayedText.length + 1));
            }, 50); // Typing speed
            return () => clearTimeout(timeout);
        }
    }, [started, displayedText]);

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-warm-beige)', padding: 'var(--spacing-xl) 0' }} ref={letterRef}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-dark)' }}>A Letter For You</h2>

                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    backgroundColor: 'var(--color-cream)',
                    padding: 'var(--spacing-xl)',
                    borderRadius: '4px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    position: 'relative',
                    minHeight: '400px'
                }}>
                    {/* Paper Lines */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, rgba(0,0,0,0.05) 32px)',
                        pointerEvents: 'none'
                    }}></div>

                    <div style={{
                        fontFamily: 'var(--font-script)',
                        fontSize: '1.8rem',
                        lineHeight: '32px',
                        color: 'var(--color-text-dark)',
                        whiteSpace: 'pre-wrap',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        {displayedText}
                        <span className="cursor" style={{ opacity: displayedText.length < letterContent.length ? 1 : 0 }}>|</span>
                    </div>
                </div>
            </div>
            <style>{`
        .cursor {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
        </section>
    );
};

export default LoveLetter;
