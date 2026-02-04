import React, { useState } from 'react';

const reasons = [
    "Your beautiful smile that lights up my day.",
    "The way you look at me with so much love.",
    "Your kindness to everyone around you.",
    "How you make even boring days fun.",
    "You are my best friend.",
    "The way you laugh at my bad jokes.",
    "Your support makes me stronger.",
    "You make me feel like the luckiest person alive."
];

const WhyILoveYou = () => {
    const [reason, setReason] = useState('');

    const showReason = () => {
        const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
        setReason(randomReason);
    };

    return (
        <div style={{
            backgroundColor: 'var(--color-white)',
            padding: 'var(--spacing-lg)',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-soft)',
            textAlign: 'center'
        }}>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Why I Love You ❤️</h3>
            <p style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                Click to reveal a reason...
            </p>

            <button
                onClick={showReason}
                style={{
                    backgroundColor: 'var(--color-gold)',
                    color: 'var(--color-white)',
                    padding: '10px 20px',
                    borderRadius: '20px',
                    fontSize: '1rem',
                    transition: 'transform 0.2s',
                    marginBottom: 'var(--spacing-md)'
                }}
            >
                Tell Me Why
            </button>

            {reason && (
                <div className="fade-in" style={{
                    marginTop: 'var(--spacing-md)',
                    fontSize: '1.2rem',
                    fontStyle: 'italic',
                    color: 'var(--color-text-dark)'
                }}>
                    "{reason}"
                </div>
            )}
        </div>
    );
};

export default WhyILoveYou;
