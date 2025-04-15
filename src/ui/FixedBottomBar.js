import React from 'react';
import styles from '@/styles/ui/FixedBottomBar.module.css';

export default function FixedBottomBar() {
  return (
    <div className={styles.fixedBar}>
      <div className={styles.priceContainer}>
        <span className={styles.apenasText}>APENAS</span>
        <span className={styles.priceText}>12X R$ 59,94</span>
      </div>
      <button className={styles.buyButton}>Comprar agora</button>
    </div>
  );
}