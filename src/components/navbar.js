import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Hamburger from "../components/hamburger";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <>
      <Link href="/">
        <Image
          src="/logo1.png"
          alt=""
          width={500}
          height={300}
          className={styles.img}
          priority={true}
        ></Image>
      </Link>
      <marquee className={styles.lol}>Welcome to iShoes!</marquee>
      <div className={styles.flex}>
        <nav className={styles.navbar}>
          <div className={styles.right}>
            <ul>
              <Link href="/" className="link">
                <li>Home</li>
              </Link>
              <Link href="/about" className="link">
                <li>About Us</li>
              </Link>
              <Link href="/products" className="link">
                <li>Products</li>
              </Link>
              <Link href="/contact" className="link">
                <li>Contact Us</li>
              </Link>
              {status === "authenticated" ? (
                <Link href="/profile" className={styles.link}>
                  <li className={styles.signup}>Profile</li>
                </Link>
              ) : (
                <Link href="/api/auth/signin" className={styles.link}>
                  <li className={styles.signup}>Log In</li>
                </Link>
              )}
            </ul>
          </div>
          <Hamburger />
        </nav>
      </div>
    </>
  );
}
