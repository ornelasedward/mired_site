import Link from "next/link";

const BookingConsultation = () => {
  return (
    <div className="min-h-[60vh] xl:min-h-[510px] flex justify-center items-center text-white bg-[url('/images/booking-bg.png')]  bg-[#420FB0] z-40  relative overflow-hidden bg-cover">
      <div className=" container ">
        <div className="  mx-auto space-y-7 text-center">
          <h2 className="heading-1 normal-case">
            Need something else? Let&apos;s talk.
          </h2>
          <p className="text-xl sm:text-2xl">
            If your perfect solution isn&apos;t listed, let&apos;s build it
            together.
          </p>
          <div className=" flex justify-center">
            <Link
              href="/contact"
              className="rounded-10 outline-none focus:outline-none text-sm sm:text-base font-bold font-manrope relative py-2 px-10 h-14 inline-flex items-center justify-center bg-white hover:bg-white/100 text-black
              before:absolute before:w-full before:h-full before:bg-skin-pink-300 before:-z-10 before:rounded-10 
              before:transition-all before:duration-300 before:left-0 before:top-0 hover:before:-left-2 hover:before:-top-2
              after:absolute after:w-full after:h-full after:bg-skin-yellow-600 after:-z-10 after:rounded-10 
              after:transition-all after:duration-300 after:left-0 after:top-0 hover:after:left-2 hover:after:top-2"
            >
              Book your consultation today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConsultation;
