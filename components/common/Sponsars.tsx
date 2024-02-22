"use client";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

interface Logos {
  color?: string;
  name: string;
}

const Sponsars = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const logos: Logos[] = [
    {
      name: "Social Media",
    },
    {
      name: "Development",
    },
    {
      name: "Seo",
    },
    {
      name: "Graphics Design",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div className="  py-3 bg-white">
      <div>
        <Marquee className=" flex items-center gap-x-5">
          {logos.map((logo, index) => (
            <div key={index} className=" mx-5 inline-flex items-center gap-2">
              <svg
                className=" w-7 h-7 sm:w-14 sm:h-14  lg:w-20 lg:h-20"
                viewBox="0 0 78 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39 0L46.4164 17.1746L62.5114 7.63932L58.4164 25.8932L77.0423 27.6393L63 40L77.0423 52.3607L58.4164 54.1068L62.5114 72.3607L46.4164 62.8254L39 80L31.5836 62.8254L15.4886 72.3607L19.5836 54.1068L0.957741 52.3607L15 40L0.957741 27.6393L19.5836 25.8932L15.4886 7.63932L31.5836 17.1746L39 0Z"
                  fill={index % 2 == 0 ? "#F7BE08" : "#FF92B2"}
                />
              </svg>
              <h2>{logo.name}</h2>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsars;
