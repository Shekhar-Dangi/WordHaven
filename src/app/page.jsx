import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
export default function Home() {
  return (
    <div>
      <div className={styles.topHeader}>
        <div>
          <div className="flex">
            {" "}
            <div className={`f3 tWebHead`}>WORDHAVEN</div>
            <div className={styles.arc}></div>
          </div>
          <div className={`tNav`}>EXPLORE, EXPRESS & ENGAGE</div>
        </div>
        <div className={styles.buttonGroup}>
          <Button color={"white"} backCol="red" text="READ" />
          <Button color={"white"} backCol="red" text="WRITE" />
        </div>
      </div>
    </div>
  );
}
