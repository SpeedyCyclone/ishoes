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
        <div className="navbar mobile-nav">
          <div className="mobile-items">
            <div className="links link-items">
              <Link href="/" className="link link-item">
                Home
              </Link>
              <Link href="/skills" className="link link-item">
                Skills
              </Link>
              <Link href="/projects" className="link link-item">
                Projects
              </Link>
              <Link href="/contact" className="link link-item">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Hamburger;
