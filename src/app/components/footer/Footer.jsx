import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <div className={styles.logoImage}>
            <Image src="/logo.png" alt="Sleus blog" width={50} height={50}/>
          </div>
          <h1 className={styles.logoText}>Blog App</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          cupiditate deleniti tempora quidem explicabo quasi asperiores
          voluptates cumque similique dolorem autem, sed ipsam aspernatur ipsa,
          assumenda quo amet voluptatem.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="facebook" width={18} height={18}/>
          <Image src="/instagram.png" alt="instagram" width={18} height={18}/>
          <Image src="/twitter.png" alt="twitter" width={18} height={18}/>
          <Image src="/linkedin.png" alt="linkedin" width={18} height={18}/>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href='/'>Style</Link>
          <Link href='/'>Fashion</Link>
          <Link href='/'>Coding</Link>
          <Link href='/'>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Instagram</Link>
          <Link href='/'>Twitter</Link>
          <Link href='/'>Linkedin</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
