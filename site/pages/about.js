import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";

export default function about() {
  return (
    <Layout>
      <div className="grid grid-cols-2 w-full h-[75vh] bg-black text-white">
        <section className="my-auto pl-16">
          <h1 className="text-5xl mb-10">About Us</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <div className="w-[20vw] mx-auto my-auto">
          <Image
            src={"/static/banner.jpg"}
            alt="Tim"
            layout="responsive"
            width={100}
            height={100}
            objectFit={"cover"}
            className="rounded-2xl"
          />
        </div>
      </div>
    </Layout>
  );
}
