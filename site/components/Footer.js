import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full lg:h-[12vh] bg-black text-gray-50 text-center py-12 grid grid-cols-1 lg:flex text-lg">
      <p className="lg:mr-auto lg:pl-32">Three Diamonds Tattoo &#169; 2022</p>
      <a href="https://www.webdevbrandon.com" target="_blank" rel="noreferrer" className="lg:ml-auto lg:pr-32">
        <p>Made with webdevbrandon</p>
      </a>
    </footer>
  );
}
