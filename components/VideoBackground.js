"use client"; 
import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from '../styles/styles.module.css'; 
import ChildCard from './child';

const VideoBackground = () => {
  useEffect(() => {
    const tiltContainer = document.querySelector('.tilt-container');
    window.onload = function () {
        document.getElementById('video-bg').play();
    }

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

  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted id="video-bg" className={styles.video}>
        <source src="/media/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`${styles.content} tilt-container`}>
      <div className={styles.profileImage}>
    <img src="/pfp/pfp.gif" alt="Profile" className={styles.profileImage} />

  </div>
  <div className={`${styles.name}`}>
  <h3>DaDevGuy</h3>
  </div>

        <div className={styles.socialIcons}>
  <a href="https://github.com/DaDevGuy" target="_blank" rel="noopener noreferrer">
    <img src="/github.svg" alt="GitHub" className={`${styles.icon}`} data-name="GitHub" />
  </a>
  <a href="https://tobeadded.com/" target="_blank" rel="noopener noreferrer">
    <img src="/bitcoin.svg" alt="BitCoin" className={`${styles.icon}`} data-name="YouTube" />
  </a>
  <a href="https://steamcommunity.com/profiles/76561199562233428/" target="_blank" rel="noopener noreferrer">
    <img src="/steam.svg" alt="Steam" className={`${styles.icon}`} data-name="Steam" />
  </a>

</div>
<ChildCard />
      </div>
    </div>
  );
};

export default VideoBackground;
