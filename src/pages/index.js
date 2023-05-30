import Head from "next/head";
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
      </div>
    </>
  );
}
