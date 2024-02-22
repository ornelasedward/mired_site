const DesignDevelopment = () => {
  return (
    <div className={`$ py-16 bg-white`}>
      <div className="container grid lg:grid-cols-2 gap-10">
        <div className="border-2 border-black rounded-[20px] pt-8 md:pt-14 pb-6 px-4 md:px-8">
          <div
            className=" bg-top bg-contain bg-no-repeat max-w-full mx-auto relative pb-[76%]"
            style={{
              backgroundImage: "url('/images/design_s.png')",
            }}
          />

          <h2>Design</h2>
          <p className="text-base font-montserrat font-normal md:text-xl mt-2">
            Web design combines artistry with technical precision, and using
            tools like Figma, we craft designs aligned with your organizations
            goals.
          </p>
        </div>

        <div className="border-2 border-black rounded-[20px] pt-8 md:pt-14 pb-6 px-4 md:px-8">
          <div
            className=" bg-top bg-contain bg-no-repeat max-w-full mx-auto relative pb-[76%]"
            style={{
              backgroundImage: "url('/images/code_s.svg')",
            }}
          />

          <h2>Development</h2>
          <p className="text-base font-montserrat font-normal md:text-xl mt-2">
            We develop using custom code and leverage next-generation frameworks
            for efficiency and unparalleled performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignDevelopment;
