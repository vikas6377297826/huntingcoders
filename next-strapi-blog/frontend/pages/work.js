import React from "react";
import Layout from "../components/layout";
import { fetchAPI } from "../lib/api";

const Work = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div>
        <h1>our work</h1>
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
