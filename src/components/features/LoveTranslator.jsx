import React, { useState } from 'react';

const translations = [
    "I need your cuddles to recharge.",
    "I miss your beautiful face.",
    "I want to make memories with you.",
    "You are the best part of my day.",
    "I just want to be close to you.",
    "Everything is better when you are here."
];

const LoveTranslator = () => {
    const [input, setInput] = useState('');
    const [translation, setTranslation] = useState('');

    const handleTranslate = () => {
        if (!input.trim()) return;
        const randomTrans = translations[Math.floor(Math.random() * translations.length)];
        setTranslation(randomTrans);
    };

    return (
        <div style={{
            backgroundColor: 'var(--color-white)',
            padding: 'var(--spacing-lg)',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-soft)',
            textAlign: 'center'
        }}>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Love Translator 💖</h3>
            <p style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                Translate boring words into how I really feel.
            </p>

            <div style={{ display: 'flex', gap: '8px', marginBottom: 'var(--spacing-md)' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g., I'm tired"
                    style={{
                        flex: 1,
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ddd'
                    }}
                />
                <button
                    onClick={handleTranslate}
                    style={{
                        backgroundColor: '#e74c3c',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '0 15px',
                        cursor: 'pointer'
                    }}
                >
                    ↻
                </button>
            </div>

            {translation && (
                <div className="fade-in" style={{
                    marginTop: 'var(--spacing-md)',
                    padding: '10px',
                    backgroundColor: 'var(--color-soft-pink)',
                    borderRadius: '4px',
                    fontStyle: 'italic',
                    color: 'var(--color-text-dark)'
                }}>
                    Meaning: "{translation}"
                </div>
            )}
        </div>
    );
};

export default LoveTranslator;
