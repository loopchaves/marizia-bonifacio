import React from "react";
import Link from "next/link";
import styles from "./styles/FixedBottomBar.module.css";

export default function FixedBottomBar({
  price,
  priceAvista,
  buttonLink,
  buttonText,
  buyLink,
}) {
  return (
    <div className={styles.fixedBar}>
      <div className={styles.priceContainer}>
        <span className={styles.priceText}>
          12x <strong>{price}</strong>
        </span>
        <span className={styles.avistaText}>{priceAvista} Á VISTA</span>
      </div>
      <Link href={buttonLink}>
        <button className={styles.infoButton}>{buttonText}</button>
      </Link>
      <Link href={buyLink} target="_blank">
        <button className={styles.buyButton}>Comprar agora</button>
      </Link>
    </div>
  );
}
