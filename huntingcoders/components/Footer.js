import React from "react";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>copyright &copy; {new Date().getFullYear()} by codeoflyf</p>
    </footer>
  );
};

export default Footer;
