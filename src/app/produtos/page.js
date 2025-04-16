import Titulo from "@/ui/Titulo";
import Card from "@/ui/Card";
import styles from "./page.module.css";

export default function Produtos() {
  const produtos = {
    Prazerometro: {
      price: "12X R$ 59,94",
      imageSrc: "/prazerometro.jpg",
      title: "PRAZERÔMETRO",
      infoLink: "/",
      buyLink: "https://app.monetizze.com.br/checkout/DRP148878",
      description:
        "Curso completo, com mais de 100 horas, com conteúdo claro e lúdico para auto-terapia emocional e sexual.",
    },
    Pompoarismo: {
      price: "12X R$ 8,96",
      imageSrc: "/pompoarismo.jpg",
      title: "POMPOARISMO",
      infoLink: "/",
      buyLink: "https://app.monetizze.com.br/checkout/DWX332007",
      description:
        "Melhore sua saúde íntima e aumente o prazer e com técnicas milenares de fortalecimento do assoalho pélvico.",
    },
    SexoSemFrescura: {
      price: "12X R$ 20,95",
      imageSrc: "/sexo_sem_frescura.jpg",
      title: "SEXO SEM FRESCURA",
      infoLink: "/",
      buyLink: "https://app.monetizze.com.br/checkout/KJB404496",
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
            infoLink={produtos[produto].infoLink}
            buyLink={produtos[produto].buyLink}
            key={produto}
          />
        ))}
      </div>
    </main>
  );
}
