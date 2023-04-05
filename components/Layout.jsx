import { useEffect } from "react";

// import components
import Head from "next/head";
import Header from "./Header";
import Darkmode from "./Darkmode";
import Footer from "./Footer";

export default function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Fadillah User List</title>
      </Head>
      <Header />
      <main className="main">{children}</main>
      <Darkmode />
      <Footer />
    </>
  );
}
