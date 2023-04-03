// import components
import Head from "next/head";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Fadillah User List</title>
      </Head>
      <Header />
      <main className="main">{children}</main>
    </>
  );
}
