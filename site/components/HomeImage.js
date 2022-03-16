import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function HomeImage() {
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      onChange={onChange}
      swipeable={false}
      transitionTime={3}
    >
      <div>
        <img src="/static/background1.jpeg" alt="image-1" />
      </div>
      <div>
        <img src="/static/background2.jpg" alt="image-2" />
      </div>
      <div>
        <img src="/static/background3.jpg" alt="image-3" />
      </div>
    </Carousel>
  );
}
