import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import Image from "next/image";
import Logo from "../public/images/footer/Logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="py-[3rem] text-center text-[0.9rem] bg-[#F2F1E5]"
    >
      <div className="mt-20">
        <Link href="/" className="">
          <Image src={Logo} className="cursor-pointer" />
        </Link>
      </div>

      <ul className="flex flex-wrap justify-center gap-[2rem] ml-0 mr-auto mb-[3rem] font-bold p-4">
        <li>
          <Link href="/"> home </Link>
        </li>
        <li>
          <Link href="#services">services</Link>
        </li>
        <li>
          <Link href="#faq">faq</Link>
        </li>
        <li>
          <Link href="#gallery">our work</Link>
        </li>
        <li>
          <Link href="#contact"> Contact </Link>
        </li>
      </ul>
      <div className="flex justify-center gap-[1rem] mb-[4rem] cursor-pointer">
        <Link href="https://www.facebook.com/MiredWebServices">
          <FaFacebookF />
        </Link>
        <Link href="https://www.instagram.com/miredwebservices/">
          <AiOutlineInstagram />
        </Link>
        <Link href="https://www.tiktok.com/@miredwebservices">
          <FaTiktok />
        </Link>
        <Link href="https://www.youtube.com/channel/UCk2gRUjNhpykmPLkii2lIUA">
          <BsYoutube />
        </Link>
      </div>

      <div className="mb-[4rem] justify-evenly flex">
        <Link href="privacyPolicy">
          <small className="cursor-pointer">privacy</small>
        </Link>
        <small>&copy; 2022 mired . All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
