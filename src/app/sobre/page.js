import Titulo from "@/ui/Titulo";
import styles from "./page.module.css";
import Image from "next/image";

export default function Sobre() {
  return (
    <main className={styles.container}>
      <Titulo titulo="QUEM SOU EU?" />
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="/piramides.jpg"
            alt="Dra. Marizia Bonifácio nas pirâmides"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          {/* <h2 className={styles.subtitle}>QUEM SOU EU?</h2> */}
          <p>
            Me formei em Psicologia em 1977 e sempre me incomodou o fato de
            mulheres relatarem que nunca chegaram lá.
          </p>
          <p>
            Em 1999 iniciei o meu programa no rádio, numa missão de despertar o
            poder que cada mulher carrega e contribuir para uma vida feliz,
            realizada e emocionalmente independente.
          </p>
          <p>
            Comecei na rádio Atividade FM, onde fiquei até julho de 2002. Depois
            disso, passei por várias outras rádios, como JK, Globo AM, Band AM,
            Nativa, OK, MIG, Açaí, Opção, CesBrasília e Cerrado.
          </p>
          <p>
            O meu livro mais famoso já vendeu mais de 10 mil cópias físicas. E o
            meu curso, Prazerômetro, hoje é a minha maior contribuição para que
            mulheres se tornem emocionalmente livres e felizes em suas relações.
          </p>
          <p>
            Muito prazer, eu sou a <strong>Dra. Marizia Bonifácio</strong> e
            você está a uma década de viajar pelo universo das emoções do
            prazer!
          </p>
        </div>
      </div>
    </main>
  );
}
