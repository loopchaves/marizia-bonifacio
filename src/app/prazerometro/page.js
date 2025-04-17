import Titulo from "@/ui/Titulo";
import InfoTile from "@/ui/Infotile";
import FixedBottomBar from "@/ui/FixedBottomBar";
import { infoTiles } from "@/utils/infoTiles";
import { produtos } from "@/utils/produtos";
import styles from "./page.module.css";

export default function Prazerômetro() {
  // Encontrar o produto específico
  const produto = produtos.find((p) => p.title === "PRAZERÔMETRO");

  return (
    <>
      <main className={styles.container}>
        <Titulo titulo="O prazerômetro é pra você" />
        <p className={styles.descricaoPrazerometro}>
          O Prazerômetro é um curso pensado pra ajudar você a se sentir mais
          livre emocionalmente, feliz nos seus relacionamentos e consigo mesma.
          Um programa cuidadosamente estruturado para guiar mulheres rumo à
          liberdade emocional e à felicidade. Veja o que você precisa saber:
        </p>
        <div className={styles.infoTilesGrid}>
          {infoTiles.map((tile, index) => (
            <InfoTile key={index} {...tile} />
          ))}
        </div>
      </main>
      <FixedBottomBar
        price={produto.price}
        priceAvista={produto.priceAvista}
        buttonLink="/produtos/prazerometro"
        buttonText="+ Informações"
        buyLink={produto.buyLink}
      />
    </>
  );
}
