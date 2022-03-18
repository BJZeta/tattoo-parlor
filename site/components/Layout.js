import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="bg-black">{children}</main>
      <Footer />
    </div>
  );
}
