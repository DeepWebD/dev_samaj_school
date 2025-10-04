import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import image1 from "../../../public/ds_slider1.jpg";
import image2 from "../../../public/ds_slider2.jpg";
import image3 from "../../../public/ds_slider3.jpg";
import image4 from "../../../public/image4.jpg";

const images = [image1, image2, image3, image4];
export default function ImageSlider(im) {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className={` w-full h-full lg:h-[400px] lg:w-[350px]`}>
      <Slider {...settings}>
        {images.map((image,index)=>{

          return (
            <div key={index}>
              <img
                className={` w-full h-[350px] lg:h-[400px] lg:w-[350px] flex justify-center items-center border rounded-lg object-cover`}
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
