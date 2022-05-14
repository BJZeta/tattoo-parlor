import Link from "next/link";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-br from-black to-gray-800 text-white px-10 py-8 flex align-middle lg:px-40 xl:px-56">
      <div id="logo" className="mr-auto">
        <Link href="/">
          <a>
            <h1 className="font-bold text-3xl">Tim Tattooer</h1>
          </a>
        </Link>
      </div>

      <nav className="ml-auto flex text-4xl ">
        <a
          href="https://www.instagram.com/tim_tattooer/"
          target="_blank"
          rel="noreferrer"
          className="mr-2 hover:text-red-600"
        >
          <AiOutlineInstagram />
        </a>
        <a
          href="https://www.instagram.com/tim_tattooer/"
          target="_blank"
          rel="noreferrer"
          className="mr-2 hover:text-red-600"
        >
          <AiOutlineMail />
        </a>
      </nav>
    </header>
  );
}
