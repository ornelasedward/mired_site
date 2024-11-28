import Image from "next/image";

const ContentMarketing = () => {
  return (
    <div className="px-4 lg:px-10 py-8 md:py-12 rounded-lg border border-black flex  flex-col-reverse md:flex-row-reverse justify-between items-center gap-12 lg:gap-28">
      <div className="w-full md:w-/12">
        <h3 className="mb-6">What Makes Us Different</h3>
        <ul className="space-y-4 list-none ml-4 text-base">
          <li className="flex items-start">
            <span className="mr-3 text-blue-600">•</span>
            <span>We understand the creator economy and personal brand monetization</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-600">•</span>
            <span>We build custom solutions that you own and control</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-600">•</span>
            <span>We focus on sustainable growth, not just quick wins</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-600">•</span>
            <span>We bring technical expertise with a human-first approach</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-600">•</span>
            <span>We're invested in your long-term success</span>
          </li>
        </ul>
        <p className="mt-4 text-base">
          From building comprehensive platforms for established brands to helping individual creators secure their digital future, we focus on creating sustainable growth systems that work.
        </p>
      </div>
      <div className="w-full md:w-/12">
        <Image
          src="/images/analytics.png"
          alt="Social media"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default ContentMarketing;
