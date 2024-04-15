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
            <h2 className="heading-1 uppercase">Your Website</h2>
            <h2 className="heading-1 uppercase">Can Work Harder</h2>
            <h2 className="heading-1 uppercase">For You</h2>
          </div>
          <div>
            <div>
              <p>
                Imagine a website that not only beautifully showcases your
                brand, but also seamlessly integrates a diverse range of
                revenue-generating elements. 
                <b>At mired, we bring that vision to life.</b>
              </p>
            </div>
            <div className=" pt-10">
              <p>
                Our website building services incorporate revenue-generating
                elements such as engaging online courses, informative
                newsletters, and engaging blogs, as well as an e-commerce
                platform.
                <br />
                Your digital platform can - and should - work harder for you. 
              </p>
            </div>
          </div>
          <div className="pt-4">
          <Link href="/contact">
            <CustomButton>Book Your Consultation Today</CustomButton>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBookung;
