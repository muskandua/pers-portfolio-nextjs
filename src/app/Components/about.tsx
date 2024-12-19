import React from "react";
import Image from "next/image";
import heroImage from "../../../public/assets/picture/my picture.jpeg";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[400px] h-[400px]"
              alt="hero"
              src={heroImage}
              width={400}
              height={400}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-900">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">
              My name is dua. I study in class 2 year from Benazir Bhutto Girls
              Degree College Lyari. I interested in web development course. And
              my 6 month teaching experience. my skills is basic computer,
              graphic designer, Canva, ChatGPT, Web development Courses. Web
              development is the process of developing a website, from design to
              programming to server management. It includes both the technical
              back end (web development) and the visual front end (web design).
              Web developers can work on every step of this process or focus on
              a single aspect.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
