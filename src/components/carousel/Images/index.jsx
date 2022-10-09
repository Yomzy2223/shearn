import React from "react";
import Carousel from "react-multi-carousel";
import { Image } from "./styled";
import ShearnImg from "../../../assets/images/ShearnImg.png";

import "react-multi-carousel/lib/styles.css";
import {
  Funtuna,
  Lenovo,
  Lucid,
  NewAge,
  NIO,
  Oraimo,
  Tencent,
} from "../../../assets/images";
export const ImagesCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };

  const images = [
    ShearnImg,
    Funtuna,
    NewAge,
    Oraimo,
    Lenovo,
    Tencent,
    NIO,
    Lucid,
  ];

  return (
    <Carousel
      ssr
      // partialVisbile
      responsive={responsive}
      autoPlay
      arrows={false}
      infinite
      draggable
      swipeable
    >
      {images.slice(0, 5).map((image) => {
        return (
          <Image
            draggable={true}
            style={{ width: "100%", height: "100%" }}
            src={image}
            key={image}
          />
        );
      })}
    </Carousel>
  );
};
