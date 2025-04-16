import styles from "@/styles/ui/Card.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Card({
  imageSrc,
  title,
  description,
  price,
  infoLink,
  buyLink,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={title}
          className={styles.image}
          width={200}
          height={200}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div>
          <Link href={infoLink}>
            <button className={styles.infoButton}>+ Informações</button>
          </Link>
          <Link href={buyLink} target="_blank">
            <button className={styles.buyButton}>Comprar Agora</button>
          </Link>
          <div className={styles.price}>{price}</div>
        </div>
      </div>
    </div>
  );
}
