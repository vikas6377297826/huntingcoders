import React from "react";
import Layout from "../components/layout";
import { fetchAPI } from "../lib/api";
import styles from "../styles/Home.module.css";

const Work = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div>
        <h1>our work</h1>
        <div className={styles.container}>
          <div className={styles.containerItem}>
            <h3>Hello bro</h3>
          </div>
        </div>
      </div>
    </Layout>
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
