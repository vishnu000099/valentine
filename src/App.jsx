import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Gallery from './components/Gallery';
import LoveLetter from './components/LoveLetter';
import AIPoemGenerator from './components/features/AIPoemGenerator';
import WhyILoveYou from './components/features/WhyILoveYou';
import MemoryRecap from './components/features/MemoryRecap';
import LoveBot from './components/features/LoveBot';
import FuturePredictor from './components/features/FuturePredictor';
import LoveTranslator from './components/features/LoveTranslator';
import './App.css';

function App() {
  const [play, setPlay] = useState(false);

  return (
    <div className="App">
      <Hero />
      <OurStory />
      <Gallery />
      <LoveLetter />

      {/* Surprise Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-soft-pink)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: 'var(--spacing-xl)', color: 'var(--color-text-dark)' }}>My Surprises For You 🎁</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
            <MemoryRecap />
            <LoveBot />
            <AIPoemGenerator />
            <WhyILoveYou />
            <FuturePredictor />
            <LoveTranslator />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: 'var(--color-text-dark)',
        color: 'var(--color-cream)',
        padding: 'var(--spacing-xl) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-script)', fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>
            Every day with you is my favorite day.
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-lg)' }}>I love you, Noonu.</p>
          <div style={{ fontSize: '3rem', animation: 'pulse 2s infinite' }}>❤️</div>
        </div>
        <style>{`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        `}</style>
      </footer>

      {/* Music Player */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 100 }}>
        <button
          onClick={() => setPlay(!play)}
          style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
          title={play ? "Pause Music" : "Play 'Blue' by Yung Kai"}
        >
          {play ? '⏸️' : '🎵'}
        </button>
        <div style={{ display: 'none' }}>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=4adZ7AguVcw'
            playing={play}
            loop={true}
            volume={0.5}
            width="0"
            height="0"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
