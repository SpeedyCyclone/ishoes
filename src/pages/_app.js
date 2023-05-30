import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { SessionProvider } from "next-auth/react";
import Router from "next/router";
import { useState, useEffect } from "react";
import Loader from "../components/loader";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true);
    });

    Router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false);
    });

    Router.events.on("routeChangeError", (url) => {
      setIsLoading(false);
    });
  }, [Router]);
  return (
    <SessionProvider session={session}>
      {isLoading && <Loader />}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}
