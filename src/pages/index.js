import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>iShoes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.banner}>
        <h1 className={styles.heading}>iShoes</h1>
        <p className={styles.heading1}>
          Your one stop destination for smart shoes.
        </p>
        <p className={styles.p}>
          iShoes makes commuting easy. With the 21st century technology, iShoes
          has advanced its game and provides much more features for users.
          Sensors, GPS, Wheels are just a few of the features which we have made
          to improve user interaction. With its cutting-edge technology and
          seamless connectivity, it provides comfort and support to users who
          seek stylish and smart design. To meet our customers demand, we
          introducted three shoes which have a great response and are likely to
          stabilise the future!
        </p>
        <div className={styles.flex}>
          <Link href="/products">
            <button className={styles.signup}>Our Products</button>
          </Link>
          <Link href="/about">
            <button className={styles.learnbtn}>Learn more</button>
          </Link>
        </div>
      </div>
      <Image
        src="/model2.png"
        alt=""
        width={1200}
        height={1000}
        className={styles.img}
        priority={true}
      ></Image>
      <h1 className={styles.test}>Testimonials</h1>
      <div className={styles.row}>
        <div className={styles.card}>
          <Image
            src="/user.webp"
            height={100}
            width={100}
            alt=""
            className={styles.userimg}
          ></Image>
          <h1 className={styles.john}>John Doe</h1>
          <p className={styles.feed}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus vel earum vitae illo reprehenderit quaerat, commodi
            atque totam eligendi eius impedit perferendis aspernatur quas
            pariatur aliquam voluptatibus esse cumque consectetur!
          </p>
        </div>
        <div className={styles.card}>
          <Image
            src="/user.webp"
            height={100}
            width={100}
            alt=""
            className={styles.userimg}
          ></Image>
          <h1 className={styles.john}>Jane Doe</h1>
          <p className={styles.feed}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus vel earum vitae illo reprehenderit quaerat, commodi
            atque totam eligendi eius impedit perferendis aspernatur quas
            pariatur aliquam voluptatibus esse cumque consectetur!
          </p>
        </div>
        <div className={styles.card}>
          <Image
            src="/user.webp"
            height={100}
            width={100}
            alt=""
            className={styles.userimg}
          ></Image>
          <h1 className={styles.john}>Charlie Doe</h1>
          <p className={styles.feed}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus vel earum vitae illo reprehenderit quaerat, commodi
            atque totam eligendi eius impedit perferendis aspernatur quas
            pariatur aliquam voluptatibus esse cumque consectetur!
          </p>
        </div>
      </div>
      <div className={styles.proboi}>
        <div className={styles.smallboi}>
          <h1 className={styles.number}>4</h1>
          <h1 className={styles.award}>Awards</h1>
        </div>
        <div className={styles.smallboi}>
          <h1 className={styles.number}>4.8 &#9733;</h1>
          <h1 className={styles.award}>Rating</h1>
        </div>
        <div className={styles.smallboi}>
          <h1 className={styles.number}>40+</h1>
          <h1 className={styles.award}>Products Sold</h1>
        </div>
        <div className={styles.smallboi}>
          <h1 className={styles.number}>100+</h1>
          <h1 className={styles.award}>Visitors</h1>
        </div>
      </div>
    </>
  );
}
