import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import PortfolioImage from '../../../public/assets/project/my portfolio Image.jpg';
import coffeeImage from '../../../public/assets/project/coffee project.jpg';
const Project = () => {
  return (
    <div id="project">
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-orange-900">
        Project
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-900">
        Explore a range pof inovation projecs crafted
        with precision and creativity.
        Each project showcases unique solutions and technical expertise. 
      </p>
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
      {/*Project*/}
      <div className="lg:w-1/2 sm:w-1/3 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={PortfolioImage}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-orange-900 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-900 mb-1">
              Portfolio Website
            </h2>
            <h1 className="title-font text-lg font-medium text-orange-800 mb-3">
              PORTFOLIO WEBSITE Using HTML & CSS 
            </h1>
            <p className="leading-relaxed text-gray-500">
              This is a simple portfolio website created using HTML, CSS. It is a responsive website.
            </p>
            <Link 
            target="_blank" 
            href={'https://jade-parfait-b80a57.netlify.app/'}>
            <p className="leading-relaxed text-orange-800 hover:underline cursor-pointer">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={coffeeImage}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-orange-900 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-900 mb-1">
              Coffee Shop
            </h2>
            <h1 className="title-font text-lg font-medium text-orange-800 mb-3">
              Coffee Shop Using HTML, CSS & JavaScript
            </h1>
            <p className="leading-relaxed text-gray-500">
              This is a simple coffee shop website created using HTML, CSS, and JavaScript. It is a responsive website. 
            </p>
            <Link 
            target="_blank" 
            href={'https://genuine-haupia-2d14a8.netlify.app/'}>
            <p className="leading-relaxed text-orange-800 hover:underline cursor-pointer">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Project