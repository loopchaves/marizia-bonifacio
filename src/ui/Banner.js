"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "@/styles/ui/Banner.module.css";

export default function Banner({ showButtons, limitHeight }) {
  const pathname = usePathname();
  const [height, setHeight] = useState(limitHeight ? 200 : 665);
  const [displayButtons, setDisplayButtons] = useState(showButtons);
  
  useEffect(() => {
    // Detectar se estamos em uma das páginas que precisam de banner reduzido
    const isReducedBannerPage = pathname === '/produtos' || pathname === '/terapias' || pathname === '/sobre';
    
  // Definir altura e visibilidade dos botões com base na rota atual
    setHeight(isReducedBannerPage ? 200 : 665);
    setDisplayButtons(!isReducedBannerPage);
  }, [pathname, showButtons]);

  return (
    <div
      className={styles.container}
      style={{
        height: height,
        transition: "height 1.5s ease-in-out",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Image
        src="/banner-6.jpg"
        width={1920}
        height={665}
        alt="Banner da Dra. Marizia Bonifácio"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
      <section>
        <h1>DRA. MARIZIA BONIFÁCIO</h1>
        <p>PSICÓLOGA E SEXÓLOGA</p>
        <h2>Amor e Prazer juntos!</h2>
        {displayButtons && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <button>
              <Link href="/produtos">Conheça meus produtos</Link>
            </button>
            <button>
              <Link href="/">Marcar um horário</Link>
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
