import Image from "next/image";

const NewsLetters = () => {
  return (
    <div className="px-4 lg:max-h-[477px] lg:px-10 py-8 md:py-12 bg-white rounded-lg border border-black flex  flex-col-reverse md:flex-row-reverse justify-between items-center gap-12 lg:gap-28">
      <div className="w-full md:w-/12 text-end">
        <h3>Newsletters</h3>
        <p className="text-sm font-semibold mt-2">
          Newsletters possess the power to transform casual signups into loyal
          customers. However, the journey from a signup to a subscriber requires
          more than sporadic emails. We believe in nurturing the relationship,
          providing consistent value, education, and rapport that makes
          subscribers feel they are supporting a cause when purchasing. We aim
          to keep your audience engaged, informed, and eager to act.
        </p>
      </div>
      <div className="w-full md:w-/12">
        <Image
          src="/images/newslater.svg"
          alt="Newsletters"
          width={596}
          height={354}
        />
      </div>
    </div>
  );
};

export default NewsLetters;
