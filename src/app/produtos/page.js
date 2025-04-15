import Titulo from "@/ui/Titulo";
import Card from "@/ui/Card";
import styles from "./page.module.css";

export default function Produtos() {
  const produtos = {
    Prazerometro: {
      price: "R$ 597,00",
      imageSrc: "/prazerometro.jpg",
      title: "PRAZERÔMETRO",
      description:
        "Curso completo, com mais de 100 horas, com conteúdo claro e lúdico para auto-terapia emocional e sexual.",
    },
    Pompoarismo: {
      price: "R$ 97,00",
      imageSrc: "/pompoarismo.jpg",
      title: "POMPOARISMO",
      description:
        "Melhore sua saúde íntima e aumente o prazer e com técnicas milenares de fortalecimento do assoalho pélvico.",
    },
    SexoSemFrescura: {
      price: "R$ 250,00",
      imageSrc: "/sexo_sem_frescura.jpg",
      title: "SEXO SEM FRESCURA",
      description:
        "Esta é uma cartilha sobre prazer sexual, ensinando como sentir e como dar prazer a si mesmo e ao seu parceiro(a).",
    },
  };

  return (
    <main className={styles.container}>
      <Titulo titulo="LIVROS E CURSOS" />
      <div className={styles.cards}>
        {Object.keys(produtos).map((produto) => (
          <Card
            imageSrc={produtos[produto].imageSrc}
            title={produtos[produto].title}
            description={produtos[produto].description}
            price={produtos[produto].price}
            key={produto}
          />
        ))}
      </div>
    </main>
  );
}
