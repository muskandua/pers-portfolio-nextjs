"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import heroImage from '../../../public/assets/picture/my picture.jpeg';


const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-200">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <b>I Am</b>
              <br className="hidden lg:inline-block" />
              <b>
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "Frontend-Developer",
                      "UI/UX Designer",
                      "Graphic Designer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </b>
            </h1>
            <div className="w-[300px] h-[2px] bg-orange-700"></div>
            &nbsp;
            <p className="mb-8 leading-relaxed text-gray-900 ">
              “I have [9 months] of experience in front-end development, where
              I've worked extensively with HTML, CSS, JavaScript, and frameworks
              like React.” Yes, becoming a web developer can be worth it,
              considering the high demand for skilled professionals and the
              potential for career advancement and job satisfaction.
            </p>
            <div className="flex justify-center">
              <Link href={"#Contact"}>
                <button className="inline-flex text-white bg-orange-800 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto w-[500px] h-[400px]"
              alt="hero"
              width={200}
              height={200}
              src={heroImage}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
