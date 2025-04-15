import Titulo from "@/ui/Titulo";
import InfoTile from "@/ui/Infotile";
import FixedBottomBar from "@/ui/FixedBottomBar";
import styles from "./page.module.css";

export default function Terapias() {
  const infoTiles = [
    {
      icon: <i className="fas fa-user-secret"></i>,
      title: "NINGUÉM PODE SABER",
      description:
        "Absolutamente ninguém, além de você, saberá. Discrição até na fatura do cartão.",
    },
    {
      icon: <i className="fas fa-desktop"></i>,
      title: "NÃO POSSO PRESENCIAL",
      description:
        "Não se preocupe. O curso é 100% online e você pode fazer de qualquer lugar.",
    },
    {
      icon: <i className="fas fa-comment-slash"></i>,
      title: "NUNCA OUVI FALAR",
      description:
        "É um conhecimento muito antigo! Já realizei palestras com esse conteúdo em vários lugares do mundo.",
    },
    {
      icon: <i className="fas fa-lock"></i>,
      title: "TENHO BLOQUEIOS",
      description:
        "O curso é pensado para quebrar suas crenças limitantes e promover o autoconhecimento em busca do prazer.",
    },
    {
      icon: <i className="fas fa-heart"></i>,
      title: "ESTOU SOLTEIRA",
      description:
        "O Prazerômetro é uma jornada de autoconhecimento e auto-terapia. Emoções e prazer andam juntos.",
    },
    {
      icon: <i className="fas fa-user-clock"></i>,
      title: "JÁ PASSEI DA IDADE",
      description: "Eu tenho alunas de 18 a 70 anos. O prazer não tem idade.",
    },
    {
      icon: <i className="fas fa-fire"></i>,
      title: "NÃO CONSIGO MAIS",
      description:
        "Conteúdo claro, lúdico, didático e objetivo para quebrar mais essa crença que te impede de ser plena!",
    },
    {
      icon: <i className="fas fa-ban"></i>,
      title: "NÃO FUNCIONA PARA MIM",
      description:
        "O Prazerômetro já ajudou milhares de mulheres a encontrarem prazer e autoconhecimento em suas relações.",
    },
    {
      icon: <i className="fas fa-money-bill-wave"></i>,
      title: "NÃO TENHO DINHEIRO",
      description:
        "Entre em contato com o nosso suporte que encontraremos formas de facilitar o pagamento para você!",
    },
  ];

  return (
    <>
      <main className={styles.container}>
        <Titulo titulo="O prazerômetro é pra você" />
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
