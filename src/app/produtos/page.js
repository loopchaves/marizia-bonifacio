import Titulo from "@/ui/Titulo";
import Card from "@/ui/Card";
import styles from "./page.module.css";

export default function Produtos() {
  const produtos = {
    Prazerometro: {
      price: "R$ 59,94",
      priceAvista: "R$ 597,00",
      imageSrc: "/prazerometro.jpg",
      title: "PRAZERÔMETRO",
      infoLink: "/prazerometro",
      buyLink: "https://app.monetizze.com.br/checkout/DRP148878",
      description:
        "Encontre sua felicidade! Guia estruturado para mulheres alcançarem liberdade emocional e bem-estar nos relacionamentos e consigo mesma.",
    },
    Pompoarismo: {
      price: "R$ 9,74",
      priceAvista: "R$ 97,00",
      imageSrc: "/pompoarismo.jpg",
      title: "POMPOARISMO",
      infoLink: "/produtos/pompoarismo",
      buyLink: "https://app.monetizze.com.br/checkout/DWX332007",
      description:
        "Melhore sua saúde íntima e aumente o prazer com técnicas milenares de fortalecimento do assoalho pélvico.",
    },
    SexoSemFrescura: {
      price: "R$ 25,10",
      priceAvista: "R$ 250,00",
      imageSrc: "/sexo_sem_frescura.jpg",
      title: "SEXO SEM FRESCURA",
      infoLink: "/produtos/sexo_sem_frescura",
      buyLink: "https://app.monetizze.com.br/checkout/KJB404496",
      description:
        "Descubra o prazer! Ebook ensina a sentir e dar prazer. Liberte-se e explore seu potencial máximo!",
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
            priceAvista={produtos[produto].priceAvista}
            infoLink={produtos[produto].infoLink}
            buyLink={produtos[produto].buyLink}
            key={produto}
          />
        ))}
      </div>
    </main>
  );
}
