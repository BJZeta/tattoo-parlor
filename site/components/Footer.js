import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-[12vh] bg-black text-gray-50 text-center py-12 flex text-lg">
      <p className="mr-auto pl-32">Tim Tattooer &#169; 2022</p>
      <a href="https://www.webdevbrandon.com" target="_blank" rel="noreferrer" className="ml-auto pr-32">
        <p>Made with webdevbrandon</p>
      </a>
    </footer>
  );
}
