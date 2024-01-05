import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, this is my blog.</b> Discover my stories and projects
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            laboriosam labore sint fugiat neque. Dicta molestiae sunt velit
            alias dolor? Iste impedit dolorum provident! Aut earum, sunt
            accusantium natus est commodi.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
