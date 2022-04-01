import Layout from "../components/Layout";
import QuotesCarousel from "../components/QuotesCarousel";
import { Quotes } from "../assets/Quotes";
import Image from "next/image";
import AppointmentForm from "../components/AppointmentForm";
import MapMarker from "../components/MapMarker";

export default function Home() {
  return (
    <Layout>
      <div className="h-[90vh] text-red-700">
        <div id="main-image" className="w-full h-full relative">
          <Image
            src="/static/banner.jpg"
            alt="Skull Horns"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
          <section className="absolute top-48 left-1/4 px-4 bg-gradient-to-r from-gray-100 opacity-75 rounded-2xl">
            <h1 className="text-4xl">Tim Tattooer's Parlor</h1>
            <h3 className="text-3xl">
              Home of some of the <span className="text-yellow-300">BEST</span>{" "}
              tattoos you can get in{" "}
              <span className="text-orange-600">Orange County</span>
            </h3>
          </section>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 justify-items-end text-white text-center pt-12 pb-10 bg-black lg:grid-cols-2">
        <div className="px-24 mb-11 lg:pl-28 2xl:pl-48 lg:mb-0 grid content-center">
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
      <div className="h-[50vh] bg-gradient-to-br from-black to-gray-800 grid grid-cols-2 text-gray-100">
        <AppointmentForm />
        <div className="pl-24">
          <h2>Come Visit Us!</h2>
          <MapMarker />
        </div>
      </div>
    </Layout>
  );
}
