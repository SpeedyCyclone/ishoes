import styles from "../styles/Contact.module.css";
import Image from "next/image";
import Head from "next/head";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1 className={styles.heading}>Contact Us</h1>
      <div className={styles.flex}>
        <form action="/" method="post" className={styles.form}>
          <div className={styles.inputgroup}>
            <label>Full Name</label>
            <input
              type="text"
              name="title"
              id="name"
              placeholder="John Doe"
              required
            />
          </div>
          <div className={styles.inputgroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@gmail.com"
              required
            />
          </div>
          <div className={styles.inputgroup}>
            <label>Message</label>
            <textarea
              name="description"
              id="msg"
              cols="30"
              rows="10"
              required
              placeholder="Lorem ipsum dolor sit..."
            ></textarea>
          </div>

          <div className={styles.inputgroup}>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
