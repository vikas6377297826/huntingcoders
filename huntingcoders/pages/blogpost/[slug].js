import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css";

const Slug = () => {
  const [blog, setBlog] = useState();

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    const { slug } = router.query;

    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlog(data);
      });
  }, [router.isReady]);

  return (
    <div className={styles.container}>
      <h2>{blog && blog.title}</h2>
      <hr />
      <p>{blog && blog.description}</p>
    </div>
  );
};

export default Slug;
