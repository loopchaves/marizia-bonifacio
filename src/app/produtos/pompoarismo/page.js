import { produtos } from "@/utils/produtos";
import ProductSchema from "@/utils/ProductSchema";
import FixedBottomBar from "@/ui/FixedBottomBar";
import Titulo from "@/ui/Titulo";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Livro Pompoarismo - Fortaleça sua Musculatura Íntima",
  description:
    "Aprenda técnicas de pompoarismo para fortalecer sua musculatura íntima, aumentar o prazer sexual e melhorar sua saúde íntima.",
  openGraph: {
    title: "Livro Pompoarismo - Fortaleça sua Musculatura Íntima",
    description:
      "Aprenda técnicas de pompoarismo para fortalecer sua musculatura íntima, aumentar o prazer sexual e melhorar sua saúde íntima.",
    images: [
      {
        url: "https://mariziabonifacio.com.br/pompoarismo.jpg",
        width: 1024,
        height: 576,
        alt: "Livro Pompoarismo - Marizia Bonifacio",
      },
    ],
    type: "article",
  },
};

export default function Pompoarismo() {
  // Encontrar o produto específico
  const produto = produtos.find((p) => p.title === "POMPOARISMO");

  return (
    <>
      <ProductSchema product={produto} />
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
