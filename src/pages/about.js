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
            Welcome to iShoes - Where Fashion Meets Technology!
            <br></br>
            <br></br>
            At iShoes, we believe that style and functionality can coexist. We
            are a leading tech shoe company dedicated to providing innovative
            footwear solutions that enhance your active lifestyle. Whether you
            are an athlete, a fitness enthusiast, or simply someone who values
            comfort and performance, we have the perfect pair of shoes for you.
            <br></br>
            <br></br>
            Our Commitment to Technology:<br></br>
            <br></br>At the core of our company is a deep commitment to
            integrating cutting-edge technology into every shoe we create. We
            collaborate with top engineers, designers, and athletes to develop
            footwear that pushes the boundaries of what is possible. From
            advanced cushioning systems to state-of-the-art materials, our shoes
            are designed to optimize performance and enhance your overall
            experience. <br></br>
            <br></br>Unmatched Comfort: <br></br>
            <br></br> We understand that comfort is paramount when it comes to
            footwear. That is why we prioritize ergonomic design and superior
            cushioning in all our shoe models. Our shoes are crafted with
            precision and attention to detail to ensure a perfect fit and
            maximum support, allowing you to stay on your feet for longer
            without discomfort.
          </p>
          <p className={styles.lorem}>
            Style That Sets You Apart: <br></br>
            <br></br>At iShoes, we believe that your shoes should not only
            perform well but also make a statement. Our design team stays ahead
            of the latest trends to create stylish footwear that reflects your
            personality and sets you apart from the crowd. Whether you prefer
            bold and vibrant colors or a sleek and minimalist look, we have the
            perfect shoe to match your style. <br></br>
            <br></br>Customer Satisfaction Guaranteed: <br></br>
            <br></br>
            Your satisfaction is our top priority. We are committed to providing
            exceptional customer service, from helping you find the right shoe
            for your needs to ensuring a smooth and hassle-free shopping
            experience. We stand behind the quality and performance of our
            products, and we offer a hassle-free return policy to ensure your
            complete satisfaction. <br></br>
            <br></br>Explore Our Collection: <br></br>
            <br></br> We invite you to explore our extensive collection of tech
            shoes for men, women, and kids. Whether you are looking for running
            shoes, training shoes, hiking shoes, or casual sneakers, we have a
            wide range of options to suit every taste and preference.
          </p>
          <p className={styles.lorem}>
            Join the iShoes Community: <br></br>
            <br></br> Stay connected with us and join our vibrant community of
            tech shoe enthusiasts. Follow us on social media, subscribe to our
            newsletter, and be the first to know about our latest product
            releases, exclusive offers, and exciting events. <br></br>
            <br></br>Experience the Future of Footwear: <br></br>
            <br></br>Are you ready to experience the future of footwear? Shop
            our collection today and discover the perfect combination of style,
            technology, and comfort. Step into the world of iShoes and elevate
            your active lifestyle to new heights.
          </p>
        </section>

        <aside className={styles.sidebar}>
          <Image
            src="/final1.png"
            alt=""
            className={styles.img}
            width={1100}
            height={674}
            priority={true}
          ></Image>
        </aside>
      </div>
    </>
  );
}
