import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Email = ({ emailData }) => {
  const { title } = emailData;
  return (
    <div id="email" className="gradient_bg">
      <div className="text-center px-7 py-32">
        <h1 className="xl:text-6xl md:text-5xl text-3xl font-semibold mb-2">
          Not ready, but want to keep tabs?
        </h1>
        <p className="font-medium text-lg max-w-[810px] m-auto mb-12">
          Sign up for our newsletter. We’ll send information on special offers,
          exciting news, and anything else we think is cool. We promise never to
          spam.
        </p>
        <form>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="rounded-[1.875rem] border-2 border-[#171616] w-full max-w-[1000px] m-auto h-14 px-8 mb-8"
          />
        </form>
        <button className="text-center btn font-medium px-16">Subscribe</button>
      </div>
    </div>
  );
};

export default Email;
