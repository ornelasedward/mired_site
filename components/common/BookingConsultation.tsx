import Link from "next/link";

const BookingConsultation = () => {
  return (
    <div className="min-h-[60vh] xl:min-h-[510px] flex justify-center items-center text-white bg-[url('/images/booking-bg.png')]  bg-[#420FB0] z-40  relative overflow-hidden bg-cover">
      <div className=" container ">
        <div className="  mx-auto space-y-7 text-center">
          <h2 className="heading-1">
            Can&apos;t Find What You&apos;re Looking For? Let&apos;s Talk.
          </h2>
          <p>
            If you&apos;re not finding the specific digital solution you need,
            don&apos;t worry. We’ll find somebody who can.
          </p>
          <div className=" flex justify-center">
            <Link href="/contact" className=" rounded-10 outline-none focus:outline-none text-sm sm:text-base font-bold font-manrope relative py-2 px-10 h-14 inline-flex items-center   justify-center bg-white hover:bg-white/90 text-black before:absolute before:w-full before:h-full before:bg-skin-pink-300 before:-z-10 before:-top-2 before:rounded-10 before:-left-2 after:absolute  after:w-full after:h-full  after:bg-skin-yellow-600 after:-z-10 after:top-2 after:rounded-10 after:left-2 ">
              Book Your Consultation Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConsultation;
