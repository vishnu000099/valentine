import React, { useState } from 'react';

const futures = [
    "In 2030, we are drinking coffee on a balcony in Paris.",
    "We are old and gray, still holding hands on a park bench.",
    "We are traveling the world, collecting fridge magnets from every country.",
    "We are building our dream home with a garden full of roses.",
    "We are laughing at our own jokes while our grandkids look confused.",
    "We are dancing in the kitchen to our favorite song at midnight.",
    "We are watching the sunset on a beach, just grateful to be together."
];

const FuturePredictor = () => {
    const [prediction, setPrediction] = useState('');
    const [loading, setLoading] = useState(false);

    const predictFuture = () => {
        setLoading(true);
        setPrediction('');

        setTimeout(() => {
            const randomContent = futures[Math.floor(Math.random() * futures.length)];
            setPrediction(randomContent);
            setLoading(false);
        }, 1500);
    };

    return (
        <div style={{
            backgroundColor: 'var(--color-white)',
            padding: 'var(--spacing-lg)',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-soft)',
            textAlign: 'center'
        }}>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Our Future Predictor 🔮</h3>
            <p style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                See what the stars say about us...
            </p>

            <button
                onClick={predictFuture}
                disabled={loading}
                style={{
                    backgroundColor: '#9b59b6',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '20px',
                    fontSize: '1rem',
                    transition: 'transform 0.2s',
                    marginBottom: 'var(--spacing-md)'
                }}
            >
                {loading ? 'Consulting the stars...' : 'Predict Our Future ✨'}
            </button>

            {prediction && (
                <div className="fade-in" style={{
                    marginTop: 'var(--spacing-md)',
                    fontSize: '1.3rem',
                    fontFamily: 'var(--font-script)',
                    color: 'var(--color-text-dark)'
                }}>
                    "{prediction}"
                </div>
            )}
        </div>
    );
};

export default FuturePredictor;
