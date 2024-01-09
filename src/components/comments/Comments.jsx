import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login"> Login to write</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className={styles.image}
              alt=""
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jose Salazar</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
            repudiandae omnis saepe quia nihil, excepturi explicabo, dolorum
            fugiat recusandae ipsa sapiente earum rem quod autem deserunt
            laboriosam dolorem consectetur ex!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
