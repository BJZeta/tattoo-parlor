import Layout from "../components/Layout";
import HomeImage from "../components/HomeImage";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div
        id="main-image"
        className="flex text-center justify-center bg-slate-800"
      >
        <h1>Image goes here</h1>
      </div>
      <div className="grid grid-cols-2 gap-3 justify-items-end text-white text-center pt-12 pb-10 bg-black">
        <div className="pl-28 grid content-center">
          <h2 className="text-4xl">Come get your next piece here!</h2>
          <p className="text-xl pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <div className="rounded-sm max-w-4xl">
          <Image
            src="/static/landing_image.jpg"
            alt="Cool Piece"
            height={400}
            width={700}
            layout="intrinsic"
            objectFit="contain"
            
          />
          </div>
        </div>
      </div>
    </Layout>
  );
}
