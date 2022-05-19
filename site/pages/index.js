import Layout from "../components/Layout";
import QuotesCarousel from "../components/QuotesCarousel";
import { Quotes } from "../assets/Quotes";
import Image from "next/image";
import MapMarker from "../components/MapMarker";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";

export default function Home() {
  return (
    <Layout>
      <div className="h-[90vh] text-red-600">
        <div id="main-image" className="w-full h-full relative">
          <Image
            src="/static/banner.jpg"
            alt="Skull Horns"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
          <section className="absolute top-48 left-1/4 bg-gradient-to-r from-black to-transparent lg:px-4 rounded-2xl animate-[1s_ease-out_0s_1_slideInFromLeft] ">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl opacity-100 titles">{`Tim Tattooer's Parlor`}</h1>
          </section>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 justify-items-end text-white lg:text-center pt-12 pb-10 bg-black lg:grid-cols-2">
        <div className="px-24 mb-11 ease-out duration-100 lg:pl-28 2xl:pl-48 lg:mb-0 grid content-center">
          <h2 className="text-4xl">About Tim Tattooer</h2>
          <p className="text-md lg:text-xl pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="mx-auto max-w-full">
          <div className="w-80">
            <Image
              src="/static/landing_image.jpg"
              alt="Cool Piece"
              height={800}
              width={700}
              layout="responsive"
              objectFit="fill"
            />
          </div>
        </div>
      </div>
      <QuotesCarousel slides={Quotes} />
      <div className="h-[100vh] lg:h-[50vh] bg-gradient-to-br from-black to-gray-800 grid grid-cols-1 gap-20 lg:gap-10 lg:grid-cols-2 text-gray-100 pt-5 lg:pl-12">
        <div className="px-10">
          <section>
            <h2 className="text-3xl text-left">Contact Info</h2>
            <h3 className="text-2xl text-left pt-5">
              Set Up An Appointment For Your Visit At:
            </h3>
            <div className="pt-5">
              <a
                href="https://www.instagram.com/tim_tattooer/"
                target="_blank"
                rel="noreferrer"
                className="inline"
              >
                <span className="flex text-3xl hover:text-red-600 justify-between w-56">
                  <AiOutlineInstagram /> Instagram
                </span>
              </a>
              <a
                href="mailto:anothertattootim@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="inline"
              >
                <span className="flex text-3xl hover:text-red-600 justify-between w-40 pt-5">
                  <AiOutlineMail /> Email
                </span>
              </a>
            </div>
          </section>

          <section className="mt-5">
            <h2 className="text-2xl">Follow Us On:</h2>
            <a
              href="https://www.tiktok.com/@tim_tattooer?lang=en"
              target="_blank"
              rel="noreferrer"
              className="inline"
            >
              <span className="flex text-3xl hover:text-red-600 justify-between w-40 pt-5">
                <SiTiktok /> TikTok
              </span>
            </a>
          </section>
        </div>
        <div className="px-10">
          <h2 className="text-3xl">Come Visit Us</h2>
          <h3 className="text-xl pt-5">834 E Lincoln Ave. Orange, CA. 92865</h3>
          <MapMarker />
        </div>
      </div>
    </Layout>
  );
}
