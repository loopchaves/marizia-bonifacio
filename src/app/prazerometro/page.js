import Titulo from "@/ui/Titulo";
import InfoTile from "@/ui/Infotile";
import FixedBottomBar from "@/ui/FixedBottomBar";
import styles from "./page.module.css";

export default function Terapias() {
  const infoTiles = [
    {
      icon: <i className="fas fa-user-secret"></i>,
      title: "Totalmente Sigiloso",
      description:
        "Fique tranquila! Ninguém vai saber que você está fazendo o curso. A compra é discreta e o nome do curso não aparece na fatura do seu cartão. Seu segredo está guardado.",
    },
    {
      icon: <i className="fas fa-desktop"></i>,
      title: "Faça de Onde Quiser",
      description:
        "Não pode ou não quer sair de casa? O Prazerômetro é totalmente online. Você acessa pelo celular, computador ou tablet, na hora que for melhor para você e no conforto do seu lar.",
    },
    {
      icon: <i className="fas fa-comment-slash"></i>,
      title: "Um Saber Antigo e Testado",
      description:
        "Pode parecer novidade, mas o conhecimento do Prazerômetro é profundo e já foi testado. Já dei palestras com esse conteúdo em vários lugares do mundo.",
    },
    {
      icon: <i className="fas fa-lock"></i>,
      title: "Para Superar Bloqueios",
      description:
        "Sente que algo te impede de sentir prazer ou se conhecer melhor? O Prazerômetro foi criado justamente pra te ajudar a quebrar essas barreiras mentais e emocionais.",
    },
    {
      icon: <i className="fas fa-heart"></i>,
      title: "Perfeito para Solteiras Também",
      description:
        "O Prazerômetro é sobre você. É uma jornada pra se conhecer, entender suas emoções e descobrir seu próprio prazer, esteja você num relacionamento ou não.",
    },
    {
      icon: <i className="fas fa-user-clock"></i>,
      title: "Prazer Não Tem Idade",
      description:
        "Acha que já passou da idade? Tenho alunas dos 18 aos 70 anos redescobrindo a alegria e o prazer. Nunca é tarde pra ser feliz.",
    },
    {
      icon: <i className="fas fa-fire"></i>,
      title: '"Acho que Não Consigo Mais"',
      description:
        "Se você pensa assim, o Prazerômetro é pra você! O conteúdo é explicado de forma clara, fácil de entender e prática, pra derrubar essa ideia de que não é mais capaz de sentir prazer e ser plena.",
    },
    {
      icon: <i className="fas fa-ban"></i>,
      title: "Funciona Mesmo? Sim!",
      description:
        "Milhares de mulheres já fizeram o Prazerômetro e encontraram mais prazer, autoconhecimento e felicidade em suas vidas e relações. Se funcionou pra elas, pode funcionar pra você também!",
    },
    {
      icon: <i className="fas fa-money-bill-wave"></i>,
      title: "E o Dinheiro?",
      description:
        "A grana está curta? A gente entende. Entre em contato com nossa equipe de suporte. Queremos te ajudar e vamos conversar para encontrar uma forma de pagamento que facilite pra você!",
    },
  ];

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
      <FixedBottomBar />
    </>
  );
}
