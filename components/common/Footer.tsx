import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Button } from "../ui/button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Footer = () => {
  return (
    <div className={` pt-12 pb-5`}>
      <div className=" container">
        <div className="flex justify-between items-center w-full ">
          <ul className="w-full lg:w-1/3 flex justify-between gap-3 md:gap-6 items-center ">
            <li className=" font-poppins font-medium text-xs sm:text-base  text-skin-slate-800">
              <Link href={"/terms"}>Terms of Use</Link>
            </li>
            <li className="font-poppins font-medium text-xs sm:text-base  text-skin-slate-800">
              <Link href={"/privacy-policy"}> Privacy policy</Link>
            </li>
          {/*  <li className="font-poppins font-medium text-xs sm:text-base  text-skin-slate-800">
              <Link href={"/"}>Pricing Plans</Link>
            </li>
            */}
          </ul>
          <Link href={"/"} className=" w-1/3 hidden lg:flex justify-center">
            <Image src={"/logo.png"} alt="Mired" width={114} height={25} />
          </Link>
          <Link
            href="/contact"
            className="w-1/2 lg:w-1/3 hidden md:flex justify-end"
          >
            <Button variant={"secondary"}>CONTACT US</Button>
          </Link>
        </div>

        <div className="flex justify-center items-center gap-6 my-8">
          <Link
            href=""
            className="w-12 h-12 rounded-full p-2 bg-skin-pink-50 hover:bg-skin-yellow-600 transition-all duration-500 flex justify-center items-center"
            target="_blank"
          >
            <FaFacebookF width={30} />
          </Link>
          <Link
            href=""
            className="w-12 h-12 rounded-full p-2 bg-skin-pink-50 hover:bg-skin-yellow-600 transition-all duration-500 flex justify-center items-center"
            target="_blank"
          >
            <FaTwitter width={30} />
          </Link>
          <Link
            href=""
            className="w-12 h-12 rounded-full p-2 bg-skin-pink-50 hover:bg-skin-yellow-600 transition-all duration-500 flex justify-center items-center"
            target="_blank"
          >
            <FaInstagram width={30} />
          </Link>
          <Link
            href=""
            target="_blank"
            className="w-12 h-12 rounded-full p-2 bg-skin-pink-50 hover:bg-skin-yellow-600 transition-all duration-500 flex justify-center items-center"
          >
            <FaLinkedinIn width={30} />
          </Link>
        </div>
        <hr />

        <div>
          <p className="text-center font-poppins font-medium text-skin-slate-800 text-sm sm:text-base uppercase mt-8">
            ©2023 mired. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
