"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/ui/Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      <Link href="/" className={pathname === "/" ? styles.active : ""}>
        INÍCIO
      </Link>
      <Link
        href="/prazerometro"
        className={pathname === "/prazerometro" ? styles.active : ""}
      >
        PRAZERÔMETRO
      </Link>
      <Link
        href="/produtos"
        className={pathname === "/produtos" ? styles.active : ""}
      >
        LIVROS E CURSOS
      </Link>
      <Link
        href="/sobre"
        className={pathname === "/sobre" ? styles.active : ""}
      >
        QUEM SOU EU?
      </Link>
    </nav>
  );
}
