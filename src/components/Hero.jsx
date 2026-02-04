import React from 'react';

const Hero = () => {
  return (
    <section className="hero section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'linear-gradient(to bottom, var(--color-cream), var(--color-soft-pink))' }}>
      <div className="container fade-in">
        <h1 style={{ fontSize: '3.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-dark)' }}>
          To the love of my life — Happy Valentine’s Day ❤️
        </h1>
        <div style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
          <p style={{ marginBottom: 'var(--spacing-sm)' }}>Hai vave,</p>
          <p style={{ marginBottom: 'var(--spacing-md)' }}>
            Ne appollom nala kutti annu. I love you because kore karnam ind u made me feel everything. Your my first and last love. Love You So Much.
          </p>
          <p style={{ fontStyle: 'italic', marginTop: 'var(--spacing-lg)' }}>- Yours Forever</p>
        </div>
        
        <div style={{ marginTop: 'var(--spacing-xl)', animation: 'bounce 2s infinite' }}>
          <span style={{ fontSize: '2rem' }}>👇</span>
        </div>
      </div>
      
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }
      `}</style>
    </section>
  );
};

export default Hero;
