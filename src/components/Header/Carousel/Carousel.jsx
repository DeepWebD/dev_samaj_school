import React from "react";
import Slider from "react-slick";


// eslint-disable-next-line react/prop-types
function Carousel( {carouselData}) {
  // eslint-disable-next-line no-undef

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={carouselData[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="carouselHeading">
      {/* <Navigation /> */}
      <div className="absolute z-10 w-[100%] h-[100vh] bg-secondary opacity-0"></div>
      <div className="absolute flex flex-col justify-center items-center text-4xl gap-0 lg:text-[100px] lg:gap-14 font-extrabold z-10 w-[98vw]  top-1/2 text-white ">
        {/* <div>Empowering Future</div>
        <div> Leaders with Values</div> */}
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={carouselData[0]} />
          </div>
          <div>
            <img src={carouselData[1]} />
          </div>
          <div>
            <img src={carouselData[2]} />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
