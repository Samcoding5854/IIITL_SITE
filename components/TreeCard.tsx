// TreeCard.tsx
import React from 'react';
import styles from './tree-card.module.css'; // Adjust the path to your CSS module file
import Image from 'next/image';

const TreeCard: React.FC = () => {
  const customStyle = {
    color: 'white',
    marginBottom: '2.5rem',
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.cta}`}>
        <Image className={styles['cta-img']} src="/Dr.-Neelu-1.jpg.webp" alt="Neelu" width={550} height={230} />

        <div className={`${styles.text}`}>
          <h2>Dr. Neelu</h2>
          <p>professional Communication faculty</p>
        </div>
      </div>
    </div>
  );
};

export default TreeCard;
