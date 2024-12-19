import React from "react";
import { BsBootstrap } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { GrHtml5 } from "react-icons/gr";
import { SiCss3, SiHtml5 } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skill = () => {
  return (
    <div id="skill">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-orange-700 tracking-widest font-medium title-font mb-1">
              SKILLS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-orange-900">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* skill  1*/}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                    <SiHtml5 className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl ">
                    <div className="absolute bg-orange-900 h-1 rounded-xl h-1 w-[100%]"></div>
                  </div>
                  <p className="font-bold text-orange-500 text-right">100%</p>
                </div>
              </div>
            </div>
            {/* skill  2*/}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                    <SiCss3 className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl ">
                    <div className="absolute bg-orange-900 h-1 rounded-xl h-1 w-[95%]"></div>
                  </div>
                  <p className="font-bold text-orange-500 text-right">95%</p>
                </div>
              </div>
            </div>
            {/* skill  3*/}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                    <FaNodeJs className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    JAVASCRIPTS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl ">
                    <div className="absolute bg-orange-900 h-1 rounded-xl h-1 w-[85%]"></div>
                  </div>
                  <p className="font-bold text-orange-500 text-right">85%</p>
                </div>
              </div>
            </div>
            {/* skill  4*/}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                    <BsBootstrap className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    BOOTSRAP
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl ">
                    <div className="absolute bg-orange-900 h-1 rounded-xl h-1 w-[90%]"></div>
                  </div>
                  <p className="font-bold text-orange-500 text-right">90%</p>
                </div>
              </div>
            </div>
            {/* skill  5*/}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                    <TbBrandNextjs className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    NEXT.JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl ">
                    <div className="absolute bg-orange-900 h-1 rounded-xl h-1 w-[80%]"></div>
                  </div>
                  <p className="font-bold text-orange-500 text-right">80%</p>
                </div>
              </div>
            </div>
            {/* skill  5*/}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                    <GrHtml5 className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML 5
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl ">
                    <div className="absolute bg-orange-900 h-1 rounded-xl h-1 w-[80%]"></div>
                  </div>
                  <p className="font-bold text-orange-500 text-right">80%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
