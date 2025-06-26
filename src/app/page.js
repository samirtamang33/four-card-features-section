import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>
            <h1 className={styles.titleLite}>Reliable, efficient delivery</h1>
            <h1 className={styles.titleBold}>Powered by Technology</h1>
          </div>
          <div className={styles.description}>
            <p>
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful.
            </p>
          </div>
        </div>
        <div className={styles.cardsWrapper}>
          <Card title="Test" description="test2" icon="icon" />
        </div>
      </main>
    </div>
  );
}
