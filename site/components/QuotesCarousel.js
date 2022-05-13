import React, { useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { Quotes } from "../assets/Quotes";

export default function HomeImage({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="relative h-[40vh] flex justify-center text-center bg-slate-200 py-32 ">
      <FaRegArrowAltCircleLeft
        onClick={prevSlide}
        className="absolute top-3/4 lg:top-1/2 left-16 lg:left-36 text-5xl text-black cursor-pointer select-none z-10"
      />
      <FaRegArrowAltCircleRight
        onClick={nextSlide}
        className="absolute top-3/4 lg:top-1/2 right-16 lg:right-36 text-5xl text-black cursor-pointer select-none z-10"
      />
      {Quotes.map((quote, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className="text-black w-72">
                <p>{`"${quote.statement}"`}</p>
                <h4>{quote.name}</h4>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
