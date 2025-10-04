/* eslint-disable react/prop-types */
import React from "react";
import Carousel from "../components/Header/Carousel/Carousel";
import Hero from "../components/Hero/Hero";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs ";
import Banner from "../components/Banner/Banner";
import Prayer from "../components/Prayer/Prayer";
import Leaders from "../components/Leaders/Leaders";
import ContactUs from "../components/ContactUs/ContactUs";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = ({schoolData}) => {

  return (
    <>
      <Carousel carouselData={schoolData.homePageCasousel} />
      <Hero heroData={schoolData.homePage.heroSection} />
      <WhyChooseUs whyChooseUsData={schoolData.homePage.whyChooseUs} />
      <Banner {...schoolData.homePage.imageGallery} />
      <Banner {...schoolData.homePage.vidoeGallery} reverse={true} />
      <Prayer />
      <Leaders leaders={schoolData.homePage.leaders} />
      <ContactUs contactUs={schoolData.homePage.contactUs} />
      <Testimonial testimonials={schoolData.homePage.testimonials} />
    </>
  );
};

export default Home;
