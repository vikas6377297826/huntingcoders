import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className={styles.ukNavbarContainer} data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>codeoflyf</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-middle">
          <ul className="uk-navbar-nav">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a className="uk-link-reset">{category.attributes.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="uk-navbar-nav">
            <Link href={"/contect"}>
              <a className="uk-link-reset">contect us</a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
