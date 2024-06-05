"use client"; 
import React, { useState, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from '../styles/styles.module.css'; 
import ChildCard from './child';

const VideoBackground = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  useEffect(() => {
    const tiltContainer = document.querySelector('.tilt-container');
    window.onload = function () {
      document.getElementById('video-bg').play();
    };

    if (tiltContainer) {
      VanillaTilt.init(tiltContainer, {
        max: 10,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });

      return () => {
        tiltContainer.vanillaTilt.destroy();
      };
    }
  }, []);

  const handleOverlayClick = () => {
    const video = document.getElementById('video-bg');
    if (video) {
      video.muted = false;
    }
    setIsOverlayVisible(false);
  };

  const copyBitcoinAddress = () => {
    const bitcoinAddress = 'bc1qu32ptqt6s04pret8n936z65cs85z2xe79csx3t';
    navigator.clipboard.writeText(bitcoinAddress)
      .then(() => {
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000);
      })
      .catch(err => console.error('Error copying Bitcoin address:', err));
  };

  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted id="video-bg" className={styles.video}>
        <source src="/media/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isOverlayVisible && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <h1>Click to Enter</h1>
        </div>
      )}
      <div className={`${styles.content} tilt-container`}>
        <div className={styles.profileImage}>
          <img src="/pfp/pfp.gif" alt="Profile" className={styles.profileImage} />
        </div>
        <div className={styles.name}>
          <h3>DaDevGuy</h3>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://github.com/DaDevGuy" target="_blank" rel="noopener noreferrer" className={styles.tooltip}>
            <img src="/github.svg" alt="GitHub" className={styles.icon} />
            <span className={styles.tooltipText}>GitHub</span>
          </a>
          <div className={`${styles.tooltip}`}>
            <button onClick={copyBitcoinAddress} className={styles.iconButton} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <img src="/bitcoin.svg" alt="BitCoin" className={styles.icon} />
              <span className={styles.tooltipText}>{copySuccess || "Bitcoin Address"}</span>
            </button>
          </div>
          <a href="https://steamcommunity.com/profiles/76561199562233428/" target="_blank" rel="noopener noreferrer" className={styles.tooltip}>
            <img src="/steam.svg" alt="Steam" className={styles.icon} />
            <span className={styles.tooltipText}>Steam</span>
          </a>
          <a href='https://paypal.me/ehank1' target='_blank' rel='noopener noreferrer' className={styles.tooltip}>
            <img src="/paypal.svg" alt="PayPal" className={styles.icon} />
            <span className={styles.tooltipText}>PayPal</span>
          </a>
        </div>
        <ChildCard />
      </div>
    </div>
  );
};

export default VideoBackground;
