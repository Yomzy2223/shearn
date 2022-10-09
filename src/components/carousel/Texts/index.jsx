import React from "react";
import Carousel from "react-multi-carousel";

export const TextCarousel = () => {
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

  const Texts = [
    "Akano Mann just bought Sh-ORAIMO shares",
    "Mariam Mirabel just bought Sh-NIO shares",
    "Kelechi Precious just earned $45 from affliate",
    "Akano Mann just deposited $600",
    "Akano Mann just bought Sh-ORAIMO shares",
    "Kelechi Precious just earned $45 from affliate",
    "John Coke just bought LUCID shares",
  ];

  const style = {
    backgroundColor: "#084784",
    padding: "8px 10px 6px",
    borderRadius: "5px",
    fontSize: "12px",
  };

  return (
    <div style={style}>
      <Carousel
        ssr
        responsive={responsive}
        autoPlay
        infinite
        draggable
        swipeable
        autoPlaySpeed={9000}
        customTransition={"transform 7000ms ease"}
        arrows={false}
      >
        {Texts.map((text) => {
          return (
            <div
              draggable={true}
              style={{ width: "100%", height: "100%", color: "white" }}
              src={text}
              key={text}
            >
              {text}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
