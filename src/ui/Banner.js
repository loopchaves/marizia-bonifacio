"use client";
import Image from "next/image";
import Link from "next/link";
import Depoimentos from "./Depoimentos";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "@/styles/ui/Banner.module.css";

// { showButtons, limitHeight }
export default function Banner() {
  const pathname = usePathname();
  const [height, setHeight] = useState(665);
  const [displayButtons, setDisplayButtons] = useState(true);

  useEffect(() => {
    // Detectar se estamos em uma das páginas que precisam de banner reduzido
    const isReducedBannerPage =
      pathname === "/produtos" ||
      pathname === "/prazerometro" ||
      pathname === "/sobre" ||
      pathname === "/produtos/prazerometro" ||
      pathname === "/produtos/pompoarismo" ||
      pathname === "/produtos/sexo_sem_frescura";

    // Definir altura e visibilidade dos botões com base na rota atual
    setHeight(isReducedBannerPage ? 400 : 665);
    setDisplayButtons(!isReducedBannerPage);

    // Rolar para o topo quando navegar para páginas com banner reduzido
    if (isReducedBannerPage) {
      window.scrollTo(0, 0);
    }
  }, [pathname]); // showButtons

  return (
    <div className={styles.container} style={{ height: height }}>
      <Image
        src="/banner-6.jpg"
        width={1920}
        height={665}
        alt="Banner da Dra. Marizia Bonifácio"
      />
      <section className={styles.contentContainer}>
        <h1 className={styles.titulo}>DRA. MARIZIA BONIFÁCIO</h1>
        <p className={styles.funcao}>PSICÓLOGA E SEXÓLOGA</p>
        <h2 className={styles.slogam}>Amor e Prazer juntos!</h2>
        <Depoimentos />
        {displayButtons && (
          <div className={styles.buttons}>
            <Link href="/prazerometro">
              <button>Conheça o Prazerômetro</button>
            </Link>
            <Link href="/produtos">
              <button>Livros e Cursos</button>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
