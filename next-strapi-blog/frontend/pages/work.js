import React from "react";
import Layout from "../components/layout";
import { fetchAPI } from "../lib/api";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Work = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Work</title>
      </Head>

      <Layout categories={categories}>
        <div>
          <h1>our work</h1>
          <div className={styles.container}>
            <div className={styles.containerItem}>
              <div className={styles.item}>
                <p>1</p>
              </div>
              <div className={styles.item}>
                <p>1</p>
              </div>
              <div className={styles.item}>
                <p>1</p>
              </div>
              <div className={styles.item}>
                <p>1</p>
              </div>
              <div className={styles.item}>
                <p>1</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [categoriesRes] = await Promise.all([
    fetchAPI("/categories", { populate: "*" }),
  ]);

  return {
    props: {
      categories: categoriesRes.data,
    },
    revalidate: 1,
  };
}

export default Work;
