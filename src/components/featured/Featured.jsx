
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Glad you&apos;re here, Shaderoomers! </b>
        Discover the depth of the ShadeRoom
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Magna voluptate cillum qui ad esse ullamco minim aute duis culpa.</h1>
          <p className={styles.postDescription}>Do ad aliquip eu sit consequat ullamco mollit minim proident ullamco enim ullamco nulla non. Aliqua eiusmod consectetur magna tempor qui cillum sint commodo incididunt sint deserunt laborum enim. Quis velit deserunt laborum mollit minim. Ullamco sit enim veniam veniam ullamco do eiusmod aliquip sunt in.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
