import Titulo from "@/ui/Titulo";
import Card from "@/ui/Card";
import { produtos } from "@/utils/produtos";
import styles from "./page.module.css";

export default function Produtos() {
  return (
    <main className={styles.container}>
      <Titulo titulo="LIVROS E CURSOS" />
      <div className={styles.cards}>
        {produtos.map((produto, index) => (
          <Card
            imageSrc={produto.imageSrc}
            title={produto.title}
            description={produto.description}
            price={produto.price}
            priceAvista={produto.priceAvista}
            infoLink={produto.infoLink}
            buyLink={produto.buyLink}
            key={index}
          />
        ))}
      </div>
    </main>
  );
}
