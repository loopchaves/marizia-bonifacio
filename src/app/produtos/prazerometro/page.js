import { produtos } from "@/utils/produtos";
import Titulo from "@/ui/Titulo";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Prazerometro() {
  // Encontrar o produto específico
  const produto = produtos.find((p) => p.title === "PRAZERÔMETRO");

  return (
    <div className={styles.container}>
      <Titulo titulo={produto.title} />
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src="/mulher_chocada.png"
            alt="Mulher surpresa"
            width={500}
            height={500}
            className={styles.image}
            priority
          />
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionTitle}>
            MAIS DE 80% DAS MULHERES NUNCA CHEGARAM LÁ!
          </p>
          <p className={styles.description}>
            Estudos apontam que mais de 80% das mulheres nunca chegaram ao ápice
            em suas relações, e a maioria delas convive com "relações
            relâmpago". E se eu te dissesse que 85% desses problemas são de
            fundo EMOCIONAL?
          </p>
          <p className={styles.description}>
            No meu curso você aprenderá técnicas que permeiam e esclarecem os
            bloqueios que impedem homens de serem mais duradouros e mulheres de
            alcançar o ÁPICE em suas relações.
          </p>
          <p className={styles.description}>
            Te convido a embarcar comigo nessa jornada de autoconhecimento em
            busca de relações mais prazerosas e felizes!
          </p>
        </div>
        <p className={styles.descriptionTitle}>
          O QUE VOCÊ VAI ENCONTRAR NO PRAZERÔMETRO
        </p>
        <p className={styles.description}>
          Apostilas, textos e vídeos com mais de 100 horas de duração. Além de
          acesso VITALÍCIO!
        </p>
        <div className={styles.moduloWrapper}>
          <p className={styles.modulo}>MÓDULO 1</p>
          <span className={styles.moduloItem}>
            1. Apresentando a profissional
          </span>
          <span className={styles.moduloItem}>2. Introdução</span>
          <span className={styles.moduloItem}>3. Medindo o Prazer</span>
          <span className={styles.moduloItem}>4. Você sabe sentir?</span>
        </div>
        <div className={styles.moduloWrapper}>
          <p className={styles.modulo}>MÓDULO 2</p>
          <span className={styles.moduloItem}>1. Dor e Falta de Prazer</span>
          <span className={styles.moduloItem}>2. Disforia pós-sexo</span>
          <span className={styles.moduloItem}>3. Superando traumas</span>
          <span className={styles.moduloItem}>4. Redescobrindo o prazer</span>
        </div>
        <div className={styles.moduloWrapper}>
          <p className={styles.modulo}>MÓDULO 3</p>
          <span className={styles.moduloItem}>1. O mundo dos números</span>
        </div>
        <div className={styles.moduloWrapper}>
          <p className={styles.modulo}>MÓDULO 4</p>
          <span className={styles.moduloItem}>
            1. Ansiedade e Depressão: como curar?
          </span>
        </div>
        <div className={styles.moduloWrapper}>
          <p className={styles.modulo}>MÓDULO 5</p>
          <span className={styles.moduloItem}>
            1. Potencializando a sua autoestima
          </span>
          <span className={styles.moduloItem}>
            2. Mulheres: como chegar lá!
          </span>
        </div>
        <div className={styles.moduloWrapper}>
          <p className={styles.modulo}>MÓDULO 6</p>
          <span className={styles.moduloItem}>1. A intimidade da mulher</span>
        </div>
        <div className={styles.moduloWrapper}>
          <p className={styles.modulo}>MÓDULO 7</p>
          <span className={styles.moduloItem}>
            1. Vídeos com exercícios corporais.
          </span>
        </div>
        <div className={styles.moduloWrapper}>
          <p className={styles.modulo}>MÓDULO 8</p>
          <span className={styles.moduloItem}>
            1. Textos para fixar todo o conteúdo absorvido.
          </span>
        </div>
        <div className={styles.moduloWrapper}>
          <p className={styles.modulo}>MÓDULO 9</p>
          <span className={styles.moduloItem}>
            BÔNUS -&gt; 10 vídeos contendo técnicas corporais que permitem
            potencializar as sensações e desencadear o “ui ui ui” na mulher e
            controle no homem.
          </span>
        </div>
      </div>
      <div className={styles.priceContainer}>
        <div className={styles.priceText}>
          12x <strong>{produto.price}</strong>
        </div>
        <div className={styles.avistaText}>{produto.priceAvista} Á VISTA</div>
      </div>
      <Link href={produto.buyLink} target="_blank">
        <button className={styles.buyButton}>Comprar Agora</button>
      </Link>
      <Link href="/produtos" className={styles.backLink}>
        Voltar
      </Link>
    </div>
  );
}
