import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import styles from "./styles/Products.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Head from "next/head";

export async function getStaticPaths() {
  const product = await prisma.Product.findMany({
    select: { id: true },
  });

  return {
    paths: product.map((product) => ({
      params: { id: product.id },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const product = await prisma.Product.findUnique({
    where: { id: params.id },
  });

  if (product) {
    return {
      props: JSON.parse(JSON.stringify(product)),
    };
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}

export default function Product(product = null) {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      return (
        <>
          <center>
            <h1 className={styles.ok}>Not Authenticated</h1>
          </center>
          <Link href="/api/auth/signin" className={styles.link}>
            <button className={styles.loginbtn}>Log In</button>
          </Link>
        </>
      );
    },
  });

  if (status === "loading") {
    return (
      <>
        <center>
          <h1 className={styles.ok}>Not Authenticated</h1>
        </center>
        <Link href="/api/auth/signin" className={styles.link}>
          <center>
            <button className={styles.loginbtn}>Log In</button>
          </center>
        </Link>
      </>
    );
  }

  var final = product.category.replaceAll(/'/g, "");
  var final1 = final.split(" ").join("");
  return (
    <>
      <Head>
        <title>Product</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1 className={styles.title}>{product?.title}</h1>
      <center>
        <h2 className={`${final1}`}>{product?.category}</h2>
      </center>

      <center>
        <Image
          src={product?.image}
          alt=""
          height={500}
          width={500}
          className={styles.img}
        ></Image>{" "}
      </center>

      <p className={styles.description}>{product?.description}</p>
      <h1 className={styles.price}>₹{product?.price}</h1>
      <center>
        <Link
          href={{
            pathname: "/product/buy",
            query: { id: product.id, price: product.price },
          }}
          className="link"
        >
          <button className={styles.button}>Buy Now</button>
        </Link>
      </center>
    </>
  );
}
