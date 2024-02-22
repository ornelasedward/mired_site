import Image from "next/image";

const SocialMedia = () => {
  return (
    <>
      <div className="px-4 lg:max-h-[477px] lg:px-10 py-8 md:py-12 rounded-lg border border-black flex  flex-col-reverse bg-white md:flex-row justify-between items-center gap-12 lg:gap-28">
        <div className="w-full md:w-/12">
          <h3>Social media </h3>
          <p className="text-xs font-semibold mt-2">
            A brands social media acts as its face to the world, so it is
            essential to present transparent and trustworthy value. At the heart
            of our strategy is a consistent schedule, clear objectives, and a
            concrete plan. From producing YouTube content and securing sponsors
            to other innovative monetization methods, we ensure your social
            platforms are not just about engagement, but also revenue
            generation.
          </p>
        </div>
        <div className="w-full md:w-/12">
          <Image
            src="/images/social_media.svg"
            alt="Social media"
            width={596}
            height={354}
          />
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
