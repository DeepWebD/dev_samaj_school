import React from "react";
import Slider from "react-slick";
import PrayerCard from "./PrayerCard";
import {prayers} from '../../mockdata/prayers'
const PrayerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

  };



  return (
    <div className="w-full prayer-slider">
      <Slider {...settings}>
        {prayers.map(prayer=>{
            return (
                <div key={prayer.id}>
                    <PrayerCard prayer={prayer}/>
                </div>
            )
        })}
      </Slider>
    </div>
  );
};

export default PrayerSlider;