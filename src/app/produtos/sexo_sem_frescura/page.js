import { produtos } from "@/utils/produtos";
import FixedBottomBar from "@/ui/FixedBottomBar";
import Titulo from "@/ui/Titulo";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function SexoSemFrescura() {
  // Encontrar o produto específico
  const produto = produtos.find((p) => p.title === "SEXO SEM FRESCURA");

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
            src="/mulher_satisfeita.png"
            alt="Mulher muito satisfeita"
            width={408}
            height={612}
            className={styles.mulherImage}
            priority
          />
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              Este livro é também uma cartilha do prazer. Já foram vendidas mais
              de 10 mil cópias! Ensina como fazer pra sentir e dar prazer a si
              mesmo e ao seu parceiro ou parceira. Rico em fotos coloridas que
              ajuda a compreender as lições, indicado para todas as orientações
              sexuais e para todas as idades, de 18 a 75 anos.
            </p>
            <p className={styles.description}>
              Em 2009, apresentei a minha pesquisa sobre o Impacto da Internet
              no Comportamento Sexual Feminino e Masculino na 4th Biennial Pan
              Arab Congress of Sexual Medicine, em Cairo, no Egito. Em 2015 fui
              condecorada pelo InpaSex, como precursora das Sexualidades no
              Brasil.
            </p>
            <p className={styles.description}>
              O meu livro mais famoso já vendeu mais de 10 mil cópias físicas. E
              o meu curso, Prazerômetro, hoje é a minha maior contribuição para
              que mulheres se tornem emocionalmente livres e felizes em suas
              relações.
            </p>
            <p className={styles.description}>
              O livro é enviado em carta registrada e o prazo de entrega é de 10
              a 15 dias.
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
