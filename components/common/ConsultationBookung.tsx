import Image from "next/image";
import CustomButton from "../ui/custom-button";
import Link from "next/link";

const ConsultationBookung = () => {
  return (
    <div
      className=" py-12 sm:py-20"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(246,247,246,1) 55%)",
      }}
    >
      <div className="flex container flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        <div className="w-full  lg:max-w-[520px]">
          <Image
            src="/images/tow-girl.png"
            alt="Handsome guy"
            width={520}
            height={680}
            className="w-full object-cover"
            quality={80}
          />
        </div>

        <div className="w-full space-y-5 xl:space-y-7  flex-1">
          <div>
            <h2 className="heading-1 normal-case text-5xl sm:text-4xl lg:text-6xl text-center sm:text-left">
              One studio with every digital solution you need
            </h2>
          </div>
          <div>
            <p className="text-xl text-center sm:text-left">
              Think of us as your all-in-one digital team, bringing together
              custom software, content systems, and AI solutions. No juggling
              multiple agencies or navigating complex partnerships.
            </p>
          </div>
          <div className="flex justify-center sm:justify-start">
            <Link href="/contact">
              <CustomButton className="group relative flex items-center justify-center">
                <span className="transition-transform duration-300 group-hover:-translate-x-2">
                  Book Your Consultation Today
                </span>
                <span className="absolute right-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBookung;
