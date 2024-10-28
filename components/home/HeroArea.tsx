import Image from "next/image";
import Link from "next/link";

const HeroArea = () => {
  return (
    <div
      className={`  bg-[#161616] bg-home-bg h-[calc(80vh-80px)] sm:h-[calc(80vh-90px)]  flex items-center justify-center relative overflow-hidden `}
      style={{
        backgroundSize: "100% 100%",
      }}
    >
      <div className="container relative z-50 text-center mx-auto max-w-[75rem] space-y-12">
        <div className="space-y-6">
          <span className="inline-block text-blue-500 bg-blue-100 border border-blue-500 px-4 py-1.5 rounded-md text-sm font-medium">
            Custom Software & AI Solutions
          </span>
          <h2 className="text-2xl sm:text-7xl font-bold normal-case">
            We Build Digital Solutions That Pay For Themselves
            <span className="inline-block w-8" /> <br />
          </h2>
          <p className="text-2xl font-medium ">
            The #1 growth studio for digital innovators{" "}
            <br className="hidden xl:block" />
          </p>
        </div>
        <Link
          href="/contact"
          className="rounded-10 outline-none focus:outline-none text-sm sm:text-base font-bold font-manrope relative py-2 px-10 h-14 inline-flex items-center justify-center gap-4 bg-skin-blue-800 hover:bg-skin-blue-800/95 text-white transition-colors ease-in-out duration-300
          before:absolute before:w-full before:h-full before:bg-skin-pink-300 before:-z-10 before:-top-0 before:-left-0 before:rounded-10 before:transition-all before:ease-out before:duration-300 hover:before:-top-1 hover:before:-left-1
          after:absolute after:w-full after:h-full after:bg-skin-yellow-600 after:-z-10 after:top-0 after:left-0 after:rounded-10 after:transition-all after:ease-out after:duration-300 hover:after:top-1.5 hover:after:left-1.5"
        >
          Start your Project
          <div className="h-8 w-[1px] bg-white/30"></div>
          Book a Consultation
        </Link>
      </div>

      <Image
        src={"/images/hero_g1.svg"}
        alt="hero_g"
        width={674}
        className="absolute top-0 z-10  right-0"
        height={674}
      />
      <Image
        src={"/images/hero_g2.svg"}
        alt="hero_g"
        width={674}
        className="absolute bottom-0 z-10  left-0"
        height={674}
      />
    </div>
  );
};

export default HeroArea;
