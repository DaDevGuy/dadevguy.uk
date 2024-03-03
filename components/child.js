import React, { useState, useEffect } from 'react';
import styles from '../styles/child.module.css';

const ChildCard = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
      })
      .catch(error => console.error('Error fetching quote:', error));
  };

  return (
    <div className={styles.card}>
      <div className={styles.profileSection}>
        <img src="/pfp/pfp.gif" alt="Profile" className={styles.profileImage} />
        <h3 className={styles.username}>@gabepaki</h3>
      </div>
      <p>"{quote}"</p>
      <a href="https://discord.com/users/1177943732402790501" target="_blank" rel="noopener noreferrer" className={styles.button}>Add on Discord</a>
    </div>
  );
};

export default ChildCard;
