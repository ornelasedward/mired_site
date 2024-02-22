import Image from "next/image";

const SocialMedia = () => {
  return (
    <div className="px-4 lg:max-h-[477px] lg:px-10 py-8 md:py-12 rounded-lg border border-black flex  flex-col-reverse bg-white md:flex-row justify-between items-center gap-12 lg:gap-28">
      <div className="w-full md:w-/12">
        <h3>Social media </h3>
        <p className="text-xs font-semibold mt-2">
          Virality isn’t about who can pump out the most content, but who can
          pump out the best content. We navigate the social media maze to
          position your brand front and center, creating content that sticks.
          From tailored social media posts, to video content, to photography, we
          craft the digital stage where your brand performs best.
        </p>
      </div>
      <div className="w-full md:w-/12">
        <Image
          src="/images/social_marketing.svg"
          alt="Social media"
          width={596}
          height={354}
        />
      </div>
    </div>
  );
};

export default SocialMedia;
