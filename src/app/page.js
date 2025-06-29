import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className={styles.main} role="main">
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
        <Card
          className={styles.card1}
          title="Supervisor"
          description="Monitors activity to identify project roadblocks"
          icon={
            <Image
              src="/assets/images/icon-supervisor.svg"
              alt="Sample Icon"
              width={64}
              height={64}
            />
          }
          borderColor="var(--cyan)"
        />
        <Card
          className={styles.card2}
          title="Tam Builder"
          description="Scans our talent network to create the optimal team for your project"
          icon={
            <Image
              src="/assets/images/icon-team-builder.svg"
              alt="Sample Icon"
              width={64}
              height={64}
            />
          }
          borderColor={"var(--red)"}
        />
        <Card
          className={styles.card3}
          title="Karma"
          description="Regularly evaluates our talent to ensure quality"
          icon={
            <Image
              src="/assets/images/icon-karma.svg"
              alt="Sample Icon"
              width={64}
              height={64}
            />
          }
          borderColor={"var(--orange)"}
        />
        <Card
          className={styles.card4}
          title="Calculator"
          description="Uses data from past projects to provide better delivery estimates"
          icon={
            <Image
              src="/assets/images/icon-calculator.svg"
              alt="Sample Icon"
              width={64}
              height={64}
            />
          }
          borderColor={"var(--blue)"}
        />
      </div>
    </main>
  );
}
