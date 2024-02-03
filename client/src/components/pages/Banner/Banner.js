// Banner.js

import React from 'react';
import styles from './Banner.module.scss';

const Banner = ({ imagePath, link }) => {
  return (
    <div className={styles.banner}>
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={imagePath} alt="Banner" className={styles.bannerImage} />
        </a>
    </div>
  );
};

export default Banner;