import styles from "../styles/About.module.css";
import Image from "next/image";
import Head from "next/head";
export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.aboutcontainer}>
        <section className={styles.main}>
          <h1 className={styles.aboutus}>About Us</h1>
          <p className={styles.lorem}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s,when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <br />
          <p className={styles.lorem}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum..
          </p>
          <br />
          <p className={styles.lorem}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industs standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </section>

        <aside className={styles.sidebar}>
          <Image
            src="/poster.png"
            alt=""
            className={styles.img}
            width={1000}
            height={674}
          ></Image>{" "}
        </aside>
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
