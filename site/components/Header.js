import Link from "next/link";

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

      <nav className="ml-auto flex text-xl ">
        <Link href="/about">
          <a  className="mr-2 hover:text-red-600">
            <p>About</p>
          </a>
        </Link>
        <Link href="/gallery">
          <a className="mr-2 hover:text-red-600">
            <p>Gallery</p>
          </a>
        </Link>
        <Link href="/contact">
          <a className="hover:text-red-600">
            <p>Contact</p>
          </a>
        </Link>
      </nav>
    </header>
  );
}
