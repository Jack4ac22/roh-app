import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const test_env = process.env.TEST_ENV;
  return (
    <main>
      <section>
        <h1>Reason Of Hope</h1>
        <p>
          Working together to bring the Biblical resources to the Arabic
          speaking world.
        </p>
        <p>
          test_env: {test_env ? test_env : "undefined"}
        </p>
      </section>
    </main>
  );
}
