import Link from "next/link";
import React from "react";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogs}>
          <div className={styles.blog}>
            <Link href={"/blogpost/how-to-learn-javascript"}>
              <h2>How to learn javascript in 2022 ?</h2>
            </Link>
            <p>javascript is the language to desgin logic for the web.</p>
          </div>
          <div className={styles.blog}>
            <Link href={"/blogpost/how-to-learn-javascript"}>
              <h2>How to learn javascript in 2022 ?</h2>
            </Link>
            <p>javascript is the language to desgin logic for the web.</p>
          </div>
          <div className={styles.blog}>
            <Link href={"/blogpost/how-to-learn-javascript"}>
              <h2>How to learn javascript in 2022 ?</h2>
            </Link>
            <p>javascript is the language to desgin logic for the web.</p>
          </div>
          <div className={styles.blog}>
            <Link href={"/blogpost/how-to-learn-javascript"}>
              <h2>How to learn javascript in 2022 ?</h2>
            </Link>
            <p>javascript is the language to desgin logic for the web.</p>
          </div>
          <div className={styles.blog}>
            <Link href={"/blogpost/how-to-learn-javascript"}>
              <h2>How to learn javascript in 2022 ?</h2>
            </Link>
            <p>javascript is the language to desgin logic for the web.</p>
          </div>
          <div className={styles.blog}>
            <Link href={"/blogpost/how-to-learn-javascript"}>
              <h2>How to learn javascript in 2022 ?</h2>
            </Link>
            <p>javascript is the language to desgin logic for the web.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
