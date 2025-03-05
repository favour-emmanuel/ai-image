"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      //   swipeable={false}
      //   draggable={false}
      arrows={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      <div>
        <ReviewCard
          image="/images/u1.jpg"
          name="James Moore"
          role="Engineer"
          clientReview="The AI image generator exceeded my expectations! It creates high-quality, detailed images in seconds. Highly recommended!"
        />
      </div>
      <div>
        <ReviewCard
          image="/images/u2.jpg"
          name="Jessica Doe"
          role="Content Creator"
          clientReview="As a content creator, this tool has been a game-changer! It helps me generate unique visuals effortlessly, saving me time and effort."
        />
      </div>
      <div>
        <ReviewCard
          image="/images/u3.jpg"
          name="Philips Doe"
          role="Web Developer"
          clientReview="This AI image generator makes designing so much easier. It’s intuitive, fast, and produces stunning images for all my projects."
        />
      </div>
    </Carousel>
  );
};

export default Slider;
