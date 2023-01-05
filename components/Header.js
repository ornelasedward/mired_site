import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// import components

import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

// import react icons
import { HiMenu } from "react-icons/hi";

const Header = ({ headerData, navData }) => {
  const [header, setHeader] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  // destructure header data

  const { logoImgV1, logoImgV2, Dot, btnText } = headerData;

  useEffect(() => {
    // scroll event
    window.addEventListener("scroll", () => {
      // set the header state according to scrollY position
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header
          ? "bg-[#FAF8F4] px-3 py-3 mt-2 drop-shadow-[0px_4px_13px_rgb(1,0,66,.2)]"
          : "py-[40px] px-[50px] rounded-[1.875rem]"
      } fixed sm:left-10 sm:right-10 left-2 right-2 max-w-[100vw] z-20 flex justify-between items-center transition-all duration-500 px-[50px] rounded-[1.875rem]`}
    >
      {/* logo v1 */}

      <Link href={"/"}>
        <Image
          src={`${header ? logoImgV2 : logoImgV1}`}
          width={header ? 100 : 110}
          height={50}
        />
      </Link>

      {/* nav & button wrapper - initially hidden */}

      <div className="hidden xl:flex gap-x-[75px] font-bold">
        {/* nav */}

        <Nav navData={navData} header={header} />
        {/* btn */}

        <Link href="contactform">
          <button className="btn flex gap-x-6 text-center items-center">
            <Image src={`${Dot}`} width={10} height={10} />
            {btnText}
          </button>
        </Link>
      </div>

      {/* nav menu btn- hide on large screens */}
      <div
        onClick={() => setNavMobile(!navMobile)}
        className="xl:hidden cursor-pointer z-10"
      >
        <HiMenu className="text-4xl text-black" />
      </div>

      {/* nav mobile - hide on large screens */}
      <div
        className={`${
          navMobile ? "max-h-screen" : "max-h-0"
        } xl:hidden absolute top-0 w-full right-0 rounded-[1.875rem] overflow-hidden shadow-2xl transition-all`}
      >
        <NavMobile navData={navData} />
      </div>
    </header>
  );
};

export default Header;
