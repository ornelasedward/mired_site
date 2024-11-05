import Image from "next/image";
import Link from "next/link";

const WebDesign = () => {
  return (
    <div className="bg-skin-pink-200 py-16 border-y-[2px] border-black/100">
      <div className="flex container flex-col-reverse lg:flex-row justify-between gap-12 items-center">
        <div className="w-full space-y-6 lg:max-w-[850px]">
          <h3 className="heading-2">BUILD</h3>
          <p className="text-2xl">
            We turn ideas into digital solutions. From napkin sketches into
            full-stack applications to scaling existing platforms - we deliver
            the complete tech stack for serious growth. Custom software that
            drives real results. That's it.
          </p>
          <div>
            <Link
              href="/web-design-&-development"
              className="group inline-flex gap-x-2 items-center font-semibold text-black"
            >
              <p className="uppercase font-orbitron font-semibold text-sm">
                Learn more
              </p>
              <svg
                width="24"
                height="10"
                viewBox="0 0 24 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-x-125 origin-left"
              >
                <path
                  d="M23.4596 5.45962C23.7135 5.20578 23.7135 4.79422 23.4596 4.54038L19.323 0.403806C19.0692 0.149965 18.6576 0.149965 18.4038 0.403806C18.15 0.657647 18.15 1.0692 18.4038 1.32304L22.0808 5L18.4038 8.67696C18.15 8.9308 18.15 9.34235 18.4038 9.59619C18.6576 9.85003 19.0692 9.85003 19.323 9.59619L23.4596 5.45962ZM0 5.65H23V4.35H0V5.65Z"
                  fill="#420FB0"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="w-full max-w-[340px] lg:w-1/3 flex justify-center lg:justify-end">
          <Image
            src="/images/web_design.svg"
            alt="Web design & Development"
            width={340}
            height={340}
            className=" w-full object-cover"
            quality={80}
          />
        </div>
      </div>
    </div>
  );
};

export default WebDesign;
