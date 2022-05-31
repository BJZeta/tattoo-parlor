import Link from "next/link";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { SiTiktok } from 'react-icons/si'

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-br from-black to-gray-800 text-white px-10 py-8 flex align-middle lg:px-40 xl:px-56">
      <div id="logo" className="mr-auto">
        <Link href="/">
          <a>
            <h1 className="text-4xl titles">Three Diamonds Tattoo</h1>
          </a>
        </Link>
      </div>

      <nav className="ml-auto flex text-3xl md:text-4xl ">
        <a
          href="https://www.instagram.com/tim_tattooer/"
          target="_blank"
          rel="noreferrer"
          className="mr-2 md:mr-10 hover:text-red-600"
        >
          <AiOutlineInstagram />
        </a>
        <a
          href="mailto:anothertattootim@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="mr-2 md:mr-10 hover:text-red-600"
        >
          <AiOutlineMail />
        </a>
        <a
          href="https://www.tiktok.com/@tim_tattooer?lang=en"
          target="_blank"
          rel="noreferrer"
          className="mr-2 hover:text-red-600"
        >
          <SiTiktok />
        </a>
      </nav>
    </header>
  );
}
