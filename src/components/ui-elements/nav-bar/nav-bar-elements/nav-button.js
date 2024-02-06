import styles from "./nav-button.module.css";
export default function NavButton() {
  return (
    <>
      <div className={`${styles["nav-button"]} p-2 row`}>
        <div className={`${styles["nav-button-line"]}`}></div>
        <div className={`${styles["nav-button-line"]}`}></div>
        <div className={`${styles["nav-button-line"]}`}></div>
      </div>
    </>
  );
}
