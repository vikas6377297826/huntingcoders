import React from "react";
import { fetchAPI } from "../lib/api";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

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

  };

  return (
    <Layout categories={categories.data}>
      <div>
        <div>
          <h1>contect us</h1>
        </div>
        <div className={styles.formContainer}>
          <form className="form">
             <div className={styles.formControl}>
               <label htmlFor="name" className="label">name</label>
              <input type="text" required className="input"/>
             </div>
             <div className={styles.formControl}>
               <label htmlFor="email" className="label">email</label>
              <input type='email' required className="input"/>
             </div>
             <div className={styles.formControl}>
               <label htmlFor="phone" className="label">phone</label>
               <input type="number" className="input"/>
             </div>
             <button type="submit">submit</button>
          </form>
        </div>
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
