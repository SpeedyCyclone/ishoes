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
        <Image
          src="/testing.png"
          alt=""
          width={400}
          height={400}
          className={styles.img}
          priority={true}
        ></Image>
        <h1 className={styles.heading}>iShoes</h1>
        <p className={styles.heading1}>
          Your one stop destination for smart shoes.
        </p>
        <p className={styles.p}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          neque enim iste alias autem nobis non repellendus praesentium. Iure
          ullam in tempora voluptatem architecto molestias commodi expedita
          provident dolorum nemo? Consequatur expedita est rem placeat ea quod
          eum mollitia excepturi nam saepe dolorum quaerat, voluptas animi
          doloribus! Animi quibusdam voluptatum illum.
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
    </>
  );
}
