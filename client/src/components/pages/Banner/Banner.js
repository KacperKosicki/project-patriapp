// Banner.js

import React from 'react';
import styles from './Banner.module.scss';

const Banner = ({ imagePath }) => {
  return (
    <div className={styles.banner}>
      <img src={imagePath} alt="Banner" className={styles.bannerImage} />
    </div>
  );
};

export default Banner;