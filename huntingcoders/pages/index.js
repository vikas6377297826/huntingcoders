import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coders</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src="/sc.js"></Script> */}

      {/* This is componenet lavel css if i want to global css then write it in the head tag global */}
      {/* <style jsx global>
      {/* <style jsx global>
        {`
        
        .dummy{
          background-color: red;
        }
         
        `}
      </style> */}
       
       <nav className={styles.mainnav}>
          <ul>
            <li><Link href={"/"}> Home</Link></li>
            <li><Link href={"/about"}>About</Link></li>
            <li><Link href={"/contact"}>Contact</Link></li>
            <li><Link href={"/service"}>Service</Link></li>
          </ul>
       </nav>

      <main className={styles.main}>
        <h1 className={styles.title}> Hunting Coders</h1>

        <p className={styles.description}>
          Hunting Coders is a community of developers who are interested in
          learning more about the world of software development.
        </p>

          <div className="blogs">
            <h1>Populer Blogs</h1>
            <div className="blog">
               <h2>How to learn javascript in 2022 ?</h2>
               <p>javascript is the language to desgin logic for the web.</p>
            </div>
            <div className="blog">
               <h2>How to learn javascript in 2022 ?</h2>
               <p>javascript is the language to desgin logic for the web.</p>
            </div>
            <div className="blog">
               <h2>How to learn javascript in 2022 ?</h2>
               <p>javascript is the language to desgin logic for the web.</p>
            </div>
            <div className="blog">
               <h2>How to learn javascript in 2022 ?</h2>
               <p>javascript is the language to desgin logic for the web.</p>
            </div>
          </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
