import Link from 'next/link'
import React from 'react'
import Image from 'next/image'; 
import { IoMdContact } from 'react-icons/io';

const navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image 
            src={require("../../../public/assets/picture/my logo image.png")} 
            alt="My Protfolio"
            width={80} 
            height={100} 
            className="w-12"
          />
      <span className="ml-3 text-orange-900"><b>DUA IRFAN AHMAD</b></span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center 
    text-black justify-center">
      <Link href={"#Hero"} className="mr-5 hover:text-orange-800">
      <b>Home</b></Link>
      <Link href={"#about"} className="mr-5 hover:text-orange-800">
      <b>About</b></Link>
      <Link href={"#skill"} className="mr-5 hover:text-orange-800">
      <b>Skills</b></Link>
      <Link href={"#project"} className="mr-5 hover:text-orange-800">
      <b>Projects</b></Link>
      <Link href={"#Contact"} className="mr-5 hover:text-orange-800">
      <b>Contact</b></Link>
    </nav>
    <Link href={"#Contact"}>
    <button className="cv-button inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-orange-500 rounded text-base mt-4 md:mt-0"><b>Contact Me</b>
    <IoMdContact className="text-xl ml-2" />
    </button>
    </Link>
  </div>
</header>
    </div>
  )
}

export default navbar