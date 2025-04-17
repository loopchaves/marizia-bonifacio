import styles from "./styles/Infotile.module.css";

export default function InfoTile({ icon, title, description }) {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
