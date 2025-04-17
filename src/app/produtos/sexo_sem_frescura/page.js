import { produtos } from "@/utils/produtos";
import Titulo from "@/ui/Titulo";
import Image from "next/image";
import Link from "next/link";
import styles from "../produto.module.css";

export default function SexoSemFrescura() {
  // Encontrar o produto específico
  const produto = produtos.find((p) => p.title === "SEXO SEM FRESCURA");

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={produto.imageSrc}
          alt={produto.title}
          width={500}
          height={500}
          className={styles.image}
          priority
        />
      </div>
      <Titulo titulo={produto.title} />
      <p className={styles.description}>{produto.description}</p>
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
