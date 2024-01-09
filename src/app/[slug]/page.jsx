import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Jose Salzar</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              maiores corrupti aliquam nulla repudiandae cumque libero labore
              assumenda expedita aut, possimus nam reprehenderit corporis
              distinctio quo eius deserunt, sit eligendi.
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              blanditiis vitae itaque magni officia repellendus nam voluptatem
              iure omnis nemo? Sint veritatis est nobis sequi inventore labore?
              Quam, praesentium ab.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias iusto aperiam perspiciatis veniam harum minus.
              Blanditiis et, inventore commodi saepe nostrum, consectetur at
              cupiditate exercitationem porro molestias possimus expedita quos!
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
