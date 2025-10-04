/* eslint-disable react/prop-types */
import React from "react";
import { HiAcademicCap } from "react-icons/hi2";
import { TbWriting } from "react-icons/tb";
import { GrGrow } from "react-icons/gr";
import { PiShootingStarFill } from "react-icons/pi";
import Principal from "../../../public/Principal.png";

const WhyChooseUs = ({whyChooseUsData}) => {
  return (
    <div className="my-12">
      {/* Words of Our Visionary Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={Principal}
            alt="Principal"
            className="h-full object-cover rounded-lg"
          />
        </div>
        {/* Text Section */}
        <div className="flex flex-col justify-center p-10 gap-6">
          <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            {whyChooseUsData?.wordsOfOurVisionary?.title}
          </h2>
          <p className="text-lg font-light leading-relaxed">
          {whyChooseUsData?.wordsOfOurVisionary?.description}
          </p>
          <p className="italic text-yellow-300">- Principal</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10 mx-4">
        <div className="bg-blue-800 text-white p-6 flex flex-col items-center gap-4 rounded-lg shadow-lg">
          <HiAcademicCap className="text-5xl" />
          <p className="text-lg font-light text-center">
            {whyChooseUsData?.section1?.description}
          </p>
        </div>
        <div className="row-span-1 lg:row-span-2">
          <img
            src={whyChooseUsData?.teacher}
            alt="Teacher"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-1 lg:col-span-2 bg-white p-6 flex flex-col items-center lg:items-end gap-4 rounded-lg shadow-lg">
          <h2 className="text-4xl lg:text-6xl font-bold text-blue-800">
           {whyChooseUsData?.section5?.title}
          </h2>
          <p className="text-lg font-light text-center lg:text-right text-gray-700 w-full md:w-[70%]">
          {whyChooseUsData?.section5?.description}
          </p>
        </div>
        <div className="bg-blue-800 text-white p-6 flex flex-col items-center gap-4 rounded-lg shadow-lg">
          <TbWriting className="text-5xl" />
          <p className="text-lg font-light text-center">
           {whyChooseUsData?.section2?.description}
          </p>
        </div>
        <div className="bg-blue-600 text-white p-6 flex flex-col items-center gap-4 rounded-lg shadow-lg">
          <GrGrow className="text-5xl" />
          <p className="text-lg font-light text-center">
            {whyChooseUsData?.section3?.description}
          </p>
        </div>
        <div className="bg-blue-800 text-white p-6 flex flex-col items-center gap-4 rounded-lg shadow-lg">
          <PiShootingStarFill className="text-5xl" />
          <p className="text-lg font-light text-center">
           {whyChooseUsData?.section4?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
