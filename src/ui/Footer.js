import { FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";
import Link from "next/link";
import styles from "@/styles/ui/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.social}>
        <Link href="/">
          <FiInstagram />
        </Link>
        <Link href="/">
          <FiFacebook />
        </Link>
        <Link href="/">
          <FiYoutube />
        </Link>
      </div>
      <div className={styles.info}>
        <strong>Dra. Marízia Bonifácio </strong>
        <p>CRP 2045-7 / 1ª Região</p>
        <strong>CNPJ 16.882.092/0001-10</strong>
      </div>
    </footer>
  );
}
