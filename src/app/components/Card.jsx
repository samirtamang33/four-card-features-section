import styles from "./Card.module.css";

export default function Card({ title, description, icon }) {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}
