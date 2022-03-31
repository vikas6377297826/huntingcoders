import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css";
import * as fs from "fs";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.blog);

  // const router = useRouter();
  // useEffect(() => {
  //   if (!router.isReady) {
  //     return;
  //   }
  //   const { slug } = router.query;

  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setBlog(data);
  //     });
  // }, [router.isReady]);
  function createMarkup(dec) {
    return { __html: dec };
  }

  return (
    <div className={styles.container}>
      <h2>{blog && blog.title}</h2>
      <hr />
      <p>
        {blog && (
          <div dangerouslySetInnerHTML={createMarkup(blog.description)}></div>
        )}
      </p>
    </div>
  );
};

export async function getStaticPaths(context) {
  return {
    paths: [
      { params: { slug: "how-to-learn-java" } },
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-python" } },
    ],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  // console.log(context.query);

  // const slug = context.query.slug;
  const slug = context.params.slug;

  const data = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: {
      blog: JSON.parse(data),
    },
  };
}

export default Slug;
