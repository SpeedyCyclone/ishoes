import React, { useState } from "react";
import styles from "../styles/Hamburger.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Hamburger = () => {
  const [toggle, setToggle] = useState(false);
  const { data: session, status } = useSession();

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
              <Link href="/about" className="link link-item">
                About
              </Link>
              <Link href="/products" className="link link-item">
                Products
              </Link>
              <Link href="/contact" className="link link-item">
                Contact
              </Link>
              {status === "authenticated" ? (
                <Link href="/profile" className="link link-item">
                  Profile
                </Link>
              ) : (
                <Link href="/api/auth/signin" className="link link-item">
                  Log In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Hamburger;
