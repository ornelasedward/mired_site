import Image from "next/image";
import Link from "next/link";

const HeroArea = () => {
  return (
    <div
      className={`  bg-[#F4F2F6] bg-home-bg h-[calc(80vh-80px)] sm:h-[calc(100vh-90px)]  flex items-center justify-center relative overflow-hidden `}
      style={{
        backgroundSize: "100% 100%",
      }}
    >
      <div className=" container relative  z-50 text-center mx-auto max-w-[66.875rem]  space-y-5 xl:space-y-7">
        <div>
          <h2 className="text-4xl sm:text-6xl">
            READY TO TURN YOUR <br /> WEBSITE INTO A REVENUE <br /> POWERHOUSE?
          </h2>
          <p className="text-lg mt-2">
            We don&apos;t just build websites. We turn your digital presence
            into a revenue magnet by incorporating profit-driven{" "}
            <br className=" hidden xl:block" /> features such as courses,
            newsletters, and paid subscriptions and strategically market to
            maximize your reach.
          </p>
        </div>
        <Link href="/contact" className="rounded-10 outline-none focus:outline-none text-sm sm:text-base font-bold font-manrope relative py-2 px-10 h-14 inline-flex items-center justify-center bg-skin-blue-800 hover:bg-skin-blue-800/90 text-white before:absolute before:w-full before:h-full before:bg-skin-pink-300 before:-z-10 before:-top-2 before:rounded-10 before:-left-2 after:absolute after:w-full after:h-full after:bg-skin-yellow-600 after:-z-10 after:top-2 after:rounded-10 after:left-2 mt-4">
            Book Your Consultation Today
        </Link>
      </div>

      <Image
        src={"/images/hero_g1.svg"}
        alt="hero_g"
        width={674}
        className=" absolute top-0 z-10  right-0"
        height={674}
      />
      <Image
        src={"/images/hero_g2.svg"}
        alt="hero_g"
        width={674}
        className=" absolute bottom-0 z-10  left-0"
        height={674}
      />
    </div>
  );
};

export default HeroArea;
