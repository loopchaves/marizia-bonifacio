import styles from "./styles/Titulo.module.css";

export default function Titulo({ titulo }) {
  return <h3 className={styles.titulo}>{titulo}</h3>;
}
