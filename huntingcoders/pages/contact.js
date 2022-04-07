import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.heading}>Contact</h1>
        <p style={{ textAlign: "center" }}>
          If you have any questions, please feel free to contact me.
        </p>
        <div className={styles.contacForm}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="6"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
