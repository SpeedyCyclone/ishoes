import React, { useState } from "react";
import styles from "../styles/Hamburger.module.css";
import Link from "next/link";

const Hamburger = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button
        className={styles.hamburger}
        aria-label="hamburger"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={() => setToggle(!toggle)}
      >
        <i className="bx bx-menu" aria-hidden="true"></i>
      </button>
      {toggle && (
        <div className={styles.topnav}>
          <div className={styles.myLink}>
            <ul className={styles.ul}>
              <Link href="/" className={styles.link}>
                <li className={styles.li}>Home</li>
              </Link>
              <Link href="/about" className={styles.link}>
                <li className={styles.li}>About Us</li>
              </Link>
              <Link href="/products" className={styles.link}>
                <li className={styles.li}>Products</li>
              </Link>
              <Link href="/contact" className={styles.link}>
                <li className={styles.li}>Contact Us</li>
              </Link>
              <Link href="/" className={styles.link}>
                <li className={styles.li}>Sign Up</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default Hamburger;
