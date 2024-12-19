import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DiGithub } from "react-icons/di";
import { PiFacebookLogoBold } from "react-icons/pi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import myLogoImage from '../../../public/assets/picture/my logo image.png';

const footer = () => {
  return (
    <div className="bg-orange-200">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={myLogoImage}
              alt="My Protfolio"
              width={80}
              height={100}
              className="w-10"
            />
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            <span className="ml-3 text-xl text-orange-800">
              Dua Irfan Ahmad
            </span>
          </a>
          <p className="text-sm hover:text-orange-800 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black-200 sm:py-2 sm:mt-0 mt-4 ">
            © 2024 Designed by DUA IRFAN AHMAD
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-5 justify-center sm:justify-start">
            <Link
              target="_black"
              href={"https://www.facebook.com/profile.php?id=61554484404288"}
              className="mr-2 hover:text-blue"
            >
              <PiFacebookLogoBold className="text-3xl hover:text-[blue]" />
            </Link>
            <Link
              target="_black"
              href={"https://www.linkedin.com/in/dua-sheikh-8638512b4/"}
              className="mr-2 hover:text-blue"
            >
              <TiSocialLinkedinCircular className="text-4xl hover:text-[blue]" />
            </Link>
            <Link
              target="_black"
              href={"https://github.com/muskandua"}
              className="mr-2 hover:text-black"
            >
              <DiGithub className="text-4xl hover:text-[black]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default footer;
