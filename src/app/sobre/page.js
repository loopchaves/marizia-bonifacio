import Titulo from "@/ui/Titulo";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "Quem sou eu? | Psicóloga e Especialista em Sexualidade",
  description:
    "Conheça a trajetória da Dra. Marizia Bonifácio, psicóloga formada em 1977, apresentadora de rádio e autora dedicada ao desenvolvimento emocional e sexual feminino.",
  openGraph: {
    title: "Quem sou eu? | Psicóloga e Especialista em Sexualidade",
    description:
      "Conheça a trajetória da Dra. Marizia Bonifácio, psicóloga formada em 1977, apresentadora de rádio e autora dedicada ao desenvolvimento emocional e sexual feminino.",
    images: [
      {
        url: "/radio.jpg",
        width: 500,
        height: 500,
        alt: "Dra. Marizia na rádio 104,1FM",
      },
      {
        url: "/piramides.jpg",
        width: 500,
        height: 500,
        alt: "Dra. Marizia nas pirâmides do Egito",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sobre Dra. Marizia Bonifácio | Psicóloga e Especialista em Sexualidade",
    description:
      "Conheça a trajetória da Dra. Marizia Bonifácio, psicóloga formada em 1977, apresentadora de rádio e autora dedicada ao desenvolvimento emocional e sexual feminino.",
    images: ["/radio.jpg"],
  },
  keywords: [
    "Marizia Bonifácio",
    "psicóloga",
    "sexualidade feminina",
    "programa de rádio",
    "prazerômetro",
    "desenvolvimento emocional",
  ],
  alternates: {
    canonical: "/sobre",
  },
};

export default function Sobre() {
  return (
    <main className={styles.container}>
      <Titulo titulo="QUEM SOU EU?" />
      <div className={styles.content}>
        <div className={styles.leftImage}>
          <Image
            src="/radio.jpg"
            alt="Dra. Marizia na rádio 104,1FM"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <p>
            Me formei em Psicologia no ano de 1977 e, desde o início da minha
            carreira, fui profundamente impactada pelos recorrentes relatos de
            mulheres que expressavam dificuldades em alcançar a plena satisfação
            sexual e emocional.
          </p>
          <p>
            Movida por essa constatação, em 1999, concebi e iniciei um programa
            radiofônico com a missão de despertar o potencial de cada mulher,
            fomentando a construção de uma existência feliz, realizada e
            caracterizada pela autonomia emocional.
          </p>
          <p>
            Minha trajetória no radio teve início na Atividade FM, onde
            permaneci até julho de 2002. Logo, tive a oportunidade de levar
            minha mensagem a um público mais amplo através de diversas emissoras
            de renome, tais como Rádio JK, Globo AM, Band AM, Nativa, OK, MIG,
            Açaí, Opção, CesBrasília e Cerrado.
          </p>
        </div>
        <div className={styles.textContainer}>
          <p>
            No âmbito editorial, minha obra de maior destaque alcançou a
            expressiva marca de mais de 10.000 exemplares físicos vendidos,
            consolidando-se como uma referência na área. Atualmente, minha
            principal contribuição para o desenvolvimento feminino
            materializa-se no curso "Prazerômetro", um programa cuidadosamente
            estruturado para guiar mulheres rumo à liberdade emocional e à
            felicidade em suas relações interpessoais.
          </p>
          <p>
            É com imenso prazer que me coloco à disposição. Sou a{" "}
            <strong>Dra. Marizia Bonifácio</strong>, e meu propósito é
            conduzi-la por uma jornada transformadora através do complexo e
            fascinante universo das emoções e do prazer.
          </p>
        </div>
        <div className={styles.rightImage}>
          <Image
            src="/piramides.jpg"
            alt="Dra. Marizia nas pirâmides do Egito"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
    </main>
  );
}
