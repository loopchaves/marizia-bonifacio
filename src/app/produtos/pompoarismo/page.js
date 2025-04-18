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
        <div className={styles.contentPrincipal}>
          <Image
            src="/mulher_pompoarismo.png"
            alt="Mulher feliz apontando para o texto"
            width={500}
            height={500}
            className={styles.mulherImage}
            priority
          />
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              O pompoarismo é uma técnica que serve para melhorar e também para
              aumentar o prazer durante o contato íntimo. Ele consiste na
              contração e relaxamento dos músculos do assoalho pélvico, do homem
              e da mulher.
            </p>
            <p className={styles.description}>
              Além de possibilitar a melhora, a resistência e o desempenho,
              visto possibilitar a aprendizagem do controle da ejaculação o que
              possibilita aumentar o tempo de sentir o prazer. Também
              possibilita que a mulher e o homem fortaleça sua musculatura anal.
            </p>
          </div>
        </div>
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
