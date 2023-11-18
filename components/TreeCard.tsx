// TreeCard.tsx
import React from 'react';
import styles from './tree-card.module.css'; // Adjust the path to your CSS module file
import Image from 'next/image';

interface TreeCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const TreeCard: React.FC<TreeCardProps> = ({ imageUrl, title, description }) => {
  const customStyle = {
    color: 'white',
    marginBottom: '2.5rem',
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.cta}`}>
        <img className={styles['cta-img']} src={imageUrl} alt={title} />
        <div className={`${styles.text}`}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TreeCard;
