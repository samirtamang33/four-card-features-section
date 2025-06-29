import styles from "./Card.module.css";

export default function Card({
  title,
  description,
  icon,
  borderColor,
  className,
}) {
  return (
    <div
      className={`${styles.card}${className ? ` ${className}` : ""}`}
      style={{ "--card-border-color": borderColor }}
    >
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
}
