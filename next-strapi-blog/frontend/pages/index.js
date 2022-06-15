import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import programerImager from "../public/programer.svg";

const Home = ({ categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <div>
        <h1>codeoflyf</h1>
        <div className={`${styles.container} ${styles.homeContainer}`}>
          <div className={styles.containerItem}>
            <div className={styles.textContainer}>
              <h3>welcome to our Tech World.</h3>
              <p>
                we are a team of developers who love to code. we are here to
                help you to build your next project. and our goal is giving you
                the best experience possible.
              </p>
            </div>
            <Image src={programerImager} width={400} height={400} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: { populate: { anotherCompo: { populate: "*" } } },
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
