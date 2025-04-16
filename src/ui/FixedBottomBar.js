import React from "react";
import Link from "next/link";
import styles from "@/styles/ui/FixedBottomBar.module.css";

export default function FixedBottomBar() {
  return (
    <div className={styles.fixedBar}>
      <div className={styles.priceContainer}>
        <span className={styles.apenasText}>APENAS</span>
        <span className={styles.priceText}>12X R$ 59,94</span>
      </div>
      <Link href="/">
        <button className={styles.infoButton}>+ Informações</button>
      </Link>
      <Link href="https://app.monetizze.com.br/checkout/DRP148878" target="_blank">
        <button className={styles.buyButton}>Comprar agora</button>
      </Link>
    </div>
  );
}
