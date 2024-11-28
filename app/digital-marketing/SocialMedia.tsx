import Image from "next/image";

const SocialMedia = () => {
  return (
    <div className="px-4 lg:max-h-[477px] lg:px-10 py-8 md:py-12 rounded-lg border border-black flex  flex-col-reverse bg-white md:flex-row justify-between items-center gap-12 lg:gap-28">
      <div className="w-full md:w-/12">
        <h3>How We Think </h3>
        <p className="text-base font-semibold mt-2 mb-6">
          The digital economy has changed. Today, individuals ARE the brand. We get that. When you work with us, you&apos;re getting a team that:
        </p>
        <ul className="space-y-4 list-none ml-4 text-base">
          <li className="flex items-start">
            <span className="mr-3 text-blue-600">•</span>
            <span><strong className="text-blue-900">Thinks Beyond Platforms:</strong> Social media is just the beginning. We build systems that turn influence into independence.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-600">•</span>
            <span><strong className="text-blue-900">Protects Your Future:</strong> We create diverse revenue streams and owned platforms that give you control over your digital destiny.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-600">•</span>
            <span><strong className="text-blue-900">Scales What Works:</strong> Whether it's automation, AI, or custom tools, we amplify your impact without losing your authentic voice.</span>
          </li>
        </ul>
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
