import Link from "next/link";
import styles from "../styles/ui/Header.module.css"

export default function Header() {
  return (
    <nav className={styles.container}>
      <Link href="/">INÍCIO</Link>
      <Link href="/produtos">PRODUTOS</Link>
      <Link href="/terapias">TERAPIAS</Link>
      <Link href="/sobre">QUEM SOU EU?</Link>
    </nav>
  );
}