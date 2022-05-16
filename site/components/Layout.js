import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400;1,700&family=UnifrakturMaguntia&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main className="bg-black">{children}</main>
      <Footer />
    </div>
  );
}
