import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import * as fs from "fs";

const Blog = ({ blogs }) => {
  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setBlogs(data);
  //     });
  // }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogs}>
          {blogs.map((blog) => (
            <div className={styles.blog} key={blog.title}>
              <Link href={`/blogpost/${blog.slug}`}>
                <h2>{blog.title}</h2>
              </Link>
              <p>{blog.description.substr(0, 30)}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  const data = await fs.promises.readdir("blogdata");
  let myFile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    myFile = await fs.promises.readFile(`blogdata/${element}`, "utf-8");
    console.log(myFile);
    allBlogs.push(JSON.parse(myFile));
  }

  // const res = await fetch("http://localhost:3000/api/blogs");
  // const data = await res.json();
  return {
    props: {
      blogs: allBlogs,
    },
  };
}

export default Blog;
