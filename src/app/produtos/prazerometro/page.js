import { produtos } from "@/utils/produtos";
import ProductSchema from "@/utils/ProductSchema";
import FixedBottomBar from "@/ui/FixedBottomBar";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: 'Prazerômetro - Descubra o Caminho para o Prazer Pleno',
  description: 'O Prazerômetro é um método exclusivo que ajuda mulheres a identificarem bloqueios emocionais e alcançarem o prazer pleno em suas relações.',
  openGraph: {
    title: 'Prazerômetro - Descubra o Caminho para o Prazer Pleno',
    description: 'O Prazerômetro é um método exclusivo que ajuda mulheres a identificarem bloqueios emocionais e alcançarem o prazer pleno em suas relações.',
    images: [
      {
        url: '/prazerometro.jpg',
        width: 1024,
        height: 576,
        alt: 'Prazerômetro - Marizia Bonifacio',
      },
    ],
    type: 'article',
  },
};

export default function Prazerometro() {
  // Encontrar o produto específico
  const produto = produtos.find((p) => p.title === "PRAZERÔMETRO");

  return (
    <>
      <ProductSchema product={produto} />
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={produto.imageSrc}
            alt={produto.title}
            width={408}
            height={612}
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.contentPrincipal}>
          <div className={styles.contentWrapper}>
            <div className={styles.descriptionContainer}>
              <p className={styles.descriptionTitle}>
                MAIS DE 80% DAS MULHERES NUNCA CHEGARAM LÁ!
              </p>
              <p className={styles.description}>
                Estudos apontam que mais de 80% das mulheres nunca chegaram ao
                ápice, e a maioria delas convive com "relações relâmpago". Sabia
                que a maioria desses problemas vem de bloqueios emocionais?
              </p>
              <p className={styles.description}>
                No Prazerômetro você aprende técnicas fáceis para encontrar e
                liberar esses bloqueios. O resultado? Homens com mais controle e
                mulheres com mais prazer.
              </p>
              <p className={styles.description}>
                Te convido a embarcar comigo nessa jornada de autoconhecimento
                em busca de relações mais prazerosas e felizes!
              </p>
            </div>
          </div>
          <Image
            src="/mulher_chocada.png"
            alt="Mulher chocada"
            width={768}
            height={960}
            className={styles.mulherImage}
            priority
          />
        </div>

        <div className={styles.contentWrapper}>
          <p className={styles.descriptionTitle}>
            O QUE VOCÊ VAI ENCONTRAR NO PRAZERÔMETRO
          </p>
          <p className={styles.moduloIntro}>
            Apostilas, textos e vídeos com mais de 100 horas de duração. Além de
            acesso vitalício!
          </p>

          <div className={styles.moduloWrapper}>
            <p className={styles.modulo}>MÓDULO 1</p>
            <span className={styles.moduloItem}>1. Breve apresentação</span>
            <span className={styles.moduloItem}>2. Introdução</span>
            <span className={styles.moduloItem}>3. Medindo o prazer</span>
            <span className={styles.moduloItem}>4. Você sabe sentir?</span>
          </div>

          <div className={styles.moduloWrapper}>
            <p className={styles.modulo}>MÓDULO 2</p>
            <span className={styles.moduloItem}>1. Dor e falta de prazer</span>
            <span className={styles.moduloItem}>2. Disforia pós-sexo</span>
            <span className={styles.moduloItem}>3. Superando traumas</span>
            <span className={styles.moduloItem}>4. Redescobrindo o prazer</span>
          </div>

          <div className={styles.moduloWrapper}>
            <p className={styles.modulo}>MÓDULO 3</p>
            <span className={styles.moduloItem}>1. O mundo dos números</span>
          </div>

          <div className={styles.moduloWrapper}>
            <p className={styles.modulo}>MÓDULO 4</p>
            <span className={styles.moduloItem}>1. Ansiedade e Depressão</span>
          </div>

          <div className={styles.moduloWrapper}>
            <p className={styles.modulo}>MÓDULO 5</p>
            <span className={styles.moduloItem}>
              1. Potencializando a sua autoestima
            </span>
            <span className={styles.moduloItem}>
              2. Mulheres: Como chegar lá!
            </span>
          </div>

          <div className={styles.moduloWrapper}>
            <p className={styles.modulo}>MÓDULO 6</p>
            <span className={styles.moduloItem}>1. A intimidade da mulher</span>
          </div>

          <div className={styles.moduloWrapper}>
            <p className={styles.modulo}>MÓDULO 7</p>
            <span className={styles.moduloItem}>
              1. Vídeos com exercícios corporais.
            </span>
          </div>

          <div className={styles.moduloWrapper}>
            <p className={styles.modulo}>MÓDULO 8</p>
            <span className={styles.moduloItem}>
              1. Textos para fixar todo o conteúdo absorvido.
            </span>
          </div>

          <div className={styles.moduloWrapper}>
            <p className={styles.modulo}>MÓDULO 9</p>
            <span className={styles.moduloItem}>
              BÔNUS -&gt; 10 vídeos contendo técnicas corporais que permitem
              potencializar as sensações e desencadear o “ui ui ui” na mulher e
              controle no homem.
            </span>
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
