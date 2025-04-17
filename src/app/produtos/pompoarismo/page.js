import { produtos } from "@/utils/produtos";
import FixedBottomBar from "@/ui/FixedBottomBar";
import Titulo from "@/ui/Titulo";
import Image from "next/image";
import styles from "./page.module.css";

export default function Pompoarismo() {
  // Encontrar o produto específico
  const produto = produtos.find((p) => p.title === "POMPOARISMO");

  return (
    <>
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
      </div>
      <FixedBottomBar
        price={produto.price}
        priceAvista={produto.priceAvista}
        buttonLink="/produtos"
        buttonText="Voltar"
        buyLink={produto.buyLink}
      />
    </>
  );
}
