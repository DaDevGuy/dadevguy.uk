import React, { useState, useEffect } from 'react';
import styles from '../styles/child.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cx from 'classnames';

const ChildCard = () => {
  const [quote, setQuote] = useState('');
  const [userData, setUserData] = useState(null); 

  useEffect(() => {
    fetchQuote();
    discordData(); 
  }, []);

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
      })
      .catch(error => console.error('Error fetching quote:', error));
  };

  const discordData = () => {
    fetch(process.env.NEXT_PUBLIC_API_URL)
      .then(response => response.json())
      .then(data => {
        setUserData(data.data); 
      })
      .catch(error => console.error('Error fetching Discord data:', error));
  };

  return (
    <div className={styles.card}>
      <div className={styles.profileSection}>
        {userData && (
          <>
            <img src={userData.pfp} alt="Profile" className={styles.profileImage} />
            <h3 className={cx(styles.username, 'text-white', 'text-base')}>@{userData.username}</h3>
            <div className={styles.badgeContainer}>
              {userData.badges && userData.badges.includes("HOUSE_BRILLIANCE") && (
                <div className={styles.tooltip}>
                  <img src="/brilliance.svg" alt="Brilliance" className={styles.badgeb} />
                  <span className={styles.tooltiptext}>HypeSquad Brilliance</span>
                </div>
              )}
              {userData.badges && userData.badges.includes("ACTIVE_DEVELOPER") && (
                <div className={styles.tooltip}>
                  <img src="/dev.svg" alt="Steam" className={styles.badge} />
                  <span className={styles.tooltiptext}>Active Developer</span>
                </div>
              )}
              {userData.nitro && (
                <div className={styles.tooltip}>
                  <img src="/nitro.svg" alt="Nitro Subscriber" className={styles.badgeb} />
                  <span className={styles.tooltiptext}>Nitro Subscriber since 6 Mar 2024</span>
                </div>
              )}
                        <div className={styles.tooltip}>
            <img src="/nitro.svg" alt="Nitro Subscriber" className={styles.badgeb} />
            <span className={styles.tooltiptext}>Subscriber since 6 Mar 2024</span>
          </div>
            </div>

  <div className={styles.tooltip}>
    <img src="/clown.png" alt="Clown" className={styles.badgec} />
    <span className={styles.tooltiptext}>A clown, for a limited time</span>
  </div>

          </>
        )}
      </div>
      <p className="text-white">"{quote}"</p>
      {userData && (
        <a href={`https://discord.com/users/${userData.id}`} target="_blank" rel="noopener noreferrer" className={styles.button} style={{ display: 'flex', alignItems: 'center' }}>
          Add on Discord
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={cx('w-6 h-6', 'text-blue-500')}
            style={{ marginLeft: '5px' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default ChildCard;
