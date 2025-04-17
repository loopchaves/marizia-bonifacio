"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./styles/Depoimentos.module.css";

export default function Depoimentos() {
  const depoimentos = [
    {
      nome: "Severina M. R. da Silva",
      cidade: "Florianópolis - SC",
      depoimento:
        "Quero lhe agradecer por ter escrito o livro mágico SEXO SEM FRESCURA. Realmente ninguém tem até hoje, coragem para publicar algo tão verdadeiro e cheio de fotos reais e coloridas . A senhora mata a cobra e mostra o pau. Minha vida conujugal mudou radicalmente, eu me permiti a falar como gosto, como quero e quando estou disposta. Deixei de ser mudinha e submissa. Estou me amando mais, e, sendo respeitada. Muito obrigada.",
    },
    {
      nome: "RANGEL M. T. RODRIGUES",
      cidade: "Porto Alegre - RS",
      depoimento:
        "Tenho acompanhando a coluna onde a senhora responde perguntas. Foi assim, que eu a conheci e passei a exercitar seus ensinamentos. A resposta que dava a outras pessoas, serviram para eu repensar minha vida sexual, emocional e de relacionamentos vários. Até quando a senhora fala do comportamento no local de serviço , ajudou na minha transformação. O mundo deveria ter mais pessoas como a senhora. Muito obrigada.",
    },
    {
      nome: "Regina Estevam",
      cidade: "Brasília - DF",
      depoimento:
        "Venho agradecer do fundo do meu coração toda sua orientação, pois além de aprender a fazer eu aprendi muito mais sobre a importância de se amar, de cuidar melhor da vida, dos sonhos. A senhora mudou a minha vida, eu te desejo muita sáude, vida longa e sucesso na sua vida.",
    },
    {
      nome: "Lindalva",
      cidade: "Teresina - PI",
      depoimento:
        "Dra. Marizia, quero lhe agradecer por ter mudado minha vida. Eu não gostava do sexo, e após ler o seu livro SEXO SEM FRESCURA, eu fiz como a senhora ensina e agora sou muito feliz, não sinto mais nenhuma dor de cabeça nem de estomago, nem dor na hora H. Que Deus abençoe a senhora para continuar ajudando tanta gente.",
    },
    {
      nome: "João Paulo de Oliveira",
      cidade: "Barra do Garças - MT",
      depoimento:
        "Venho agradecer a tudo que a senhora ensina no rádio e no livro. A senhora salvou meu casamento. Eu pensei que sabia tudo, que fazia direito e estava errado, só pensava em mim. Os homens deveriam aprender com a senhora. Muito obrigado, Doutora.",
    },
    {
      nome: "Joana",
      cidade: "Brasília - DF",
      depoimento:
        "Vim contar que aprendemos lendo o seu livro, lia e fazia os exercícios. E que tivemos 2 filhos, na adolescência deles demos o seu livro pra eles lerem. Rezo pela senhora todos dias. A senhora é uma luz de Deus. Obrigada.",
    },
    {
      nome: "Mota",
      cidade: "Brasilia - DF",
      depoimento:
        'Lembrei do filme sem destino (Easy Rider), e que tinha uma frase antológica: "se deus não existisse teríamos que criá-lo para ter em quem acreditar". Ainda bem que você existe. Acredito que seja a frase de todos os seus ouvintes. Abração e sucesso.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Função para avançar para o próximo depoimento
  const nextDepoimento = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % depoimentos.length);
  };

  // Função para voltar ao depoimento anterior
  const prevDepoimento = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? depoimentos.length - 1 : prevIndex - 1
    );
  };

  // Função para ir para um depoimento específico
  const goToDepoimento = (index) => {
    setCurrentIndex(index);
    // Reinicia o intervalo quando o usuário navega manualmente
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      startAutoSlide();
    }
  };

  // Função para iniciar o slide automático
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      nextDepoimento();
    }, 10000); // Muda a cada 10 segundos
  };

  // Função para detectar swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextDepoimento();
    } else if (isRightSwipe) {
      prevDepoimento();
    }

    // Reset values
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Inicia o slide automático quando o componente é montado e detecta se é dispositivo touch
  useEffect(() => {
    startAutoSlide();

    // Detecta se é um dispositivo touchscreen
    const isTouchCapable =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    setIsTouchDevice(isTouchCapable);

    // Limpa o intervalo quando o componente é desmontado
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.carouselTrack}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {depoimentos.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            <p className={styles.depoimento}>"{item.depoimento}"</p>
            <p className={styles.autor}>{item.nome}</p>
            <p className={styles.cidade}>{item.cidade}</p>
          </div>
        ))}
      </div>

      <div className={styles.botoes}>
        <button
          className={`${styles.botao} ${styles.anterior}`}
          onClick={prevDepoimento}
        >
          <i className="fa-solid fa-circle-arrow-left"></i>
        </button>
        <button
          className={`${styles.botao} ${styles.proximo}`}
          onClick={nextDepoimento}
        >
          <i className="fa-solid fa-circle-arrow-right"></i>
        </button>
      </div>

      <div className={styles.navegacao}>
        {depoimentos.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicador} ${
              index === currentIndex ? styles.indicadorAtivo : ""
            }`}
            onClick={() => goToDepoimento(index)}
          />
        ))}
      </div>
    </div>
  );
}
