import React, { useState } from 'react';

const poems = [
    "In every sunrise, I see your face,\nA timeless beauty, full of grace.\nMy heart beats only for you true,\nI love everything about you, Noonu.",
    "Like the stars that light the night,\nYou make my world so warm and bright.\nWith every breath, with every sigh,\nI'll love you till the day I die.",
    "A rose may fade, the sun may set,\nBut my love for you, I'll not forget.\nYou are my joy, my soul, my friend,\nMy love for you will never end."
];

const AIPoemGenerator = () => {
    const [poem, setPoem] = useState('');
    const [loading, setLoading] = useState(false);

    const generatePoem = () => {
        setLoading(true);
        setPoem('');

        // Simulate AI thinking time
        setTimeout(() => {
            const randomPoem = poems[Math.floor(Math.random() * poems.length)];
            setPoem(randomPoem);
            setLoading(false);
        }, 2000);
    };

    return (
        <div style={{
            backgroundColor: 'var(--color-white)',
            padding: 'var(--spacing-lg)',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-soft)',
            textAlign: 'center'
        }}>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>AI Poem Generator for Noonu 🤖✍️</h3>
            <p style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                Ask our AI to write a poem just for her.
            </p>

            <button
                onClick={generatePoem}
                disabled={loading}
                style={{
                    backgroundColor: 'var(--color-blush)',
                    color: 'var(--color-text-dark)',
                    padding: '10px 20px',
                    borderRadius: '20px',
                    fontSize: '1rem',
                    transition: 'transform 0.2s',
                    marginBottom: 'var(--spacing-md)'
                }}
            >
                {loading ? 'Writing specialized poem...' : 'Generate Poem ❤️'}
            </button>

            {poem && (
                <div className="fade-in" style={{
                    marginTop: 'var(--spacing-md)',
                    fontFamily: 'var(--font-script)',
                    fontSize: '1.5rem',
                    lineHeight: '1.4',
                    color: 'var(--color-text-dark)',
                    whiteSpace: 'pre-line'
                }}>
                    {poem}
                </div>
            )}
        </div>
    );
};

export default AIPoemGenerator;
