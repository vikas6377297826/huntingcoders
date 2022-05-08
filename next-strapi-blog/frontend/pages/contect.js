import React from "react";
import { fetchAPI } from "../lib/api";
import Layout from "../components/layout";

const contect = ({ categories }) => {
  const submitHandler = async () => {
    // const response = await fetch("http://localhost:1337/api/contects", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     data: {
    //       name: "vikas patel",
    //       email: "vikaspatel2493@gmail.com",
    //       phone: "234537868",
    //     },
    //   }),
    // });
    // const data = await response.json();
    // console.log("data", data);

    const response = await fetchAPI("/contects", {
      method: "POST",
      body: JSON.stringify({
        data: {
          name: "vikas patel",
          email: "vikaspatel2493@gmail.com",
          phone: "234537868",
        },
      }),
    });

    console.log("response", response);
  };

  return (
    <Layout categories={categories.data}>
      <div>
        <h1>contect us</h1>

        <button onClick={submitHandler}>click me</button>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const categoriesRes = await fetchAPI("/categories");

  return {
    props: { categories: categoriesRes },
    revalidate: 1,
  };
}

export default contect;
