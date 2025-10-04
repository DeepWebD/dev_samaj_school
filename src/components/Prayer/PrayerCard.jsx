/* eslint-disable react/prop-types */
import React from "react";

const PrayerCard = ({ prayer }) => {
  return (
    <div className="px-2 py-20 w-full flex justify-center">
      <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
        <div className="lg:w-1/2">
          <div
            className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
            style={{
              backgroundImage: `url(${prayer.image})`,
            }}
          ></div>
        </div>
        <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
          <h2 className="text-3xl text-gray-800 font-bold">
            {prayer.title}
            {/* <span className="text-primary"> Choices</span> */}
          </h2>
          <p className="mt-4 text-gray-600 font-extralight">
            I rejoice to think of you, my beloved parents, for the unbounded
            love you give me and the unconditional service you render to m e .
            You a r e my first friends and benefactors i n whose lap I spent my
            happiest hours of infancy. You are my only friends who shall never
            leave m e sickness and difficulties, helplessness and degradation.
            You are the only friends who will ever be happy in my progress and
            prosperity. Let me ever thank you, serve you and make you the
            dearest part of myself. This is my prayer this day and for all days
            t o come
          </p>
          <div className="mt-8">
            <p
              href="#"
              className="text-primary px-5 py-3 font-semibold  border-t-2 border-primary"
            >
              {prayer.dayName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerCard;
