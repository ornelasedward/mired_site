import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}
const CustomButton: FC<Props> = ({ children, className }) => {
  return (
    <button
      className={cn(
        "rounded-10 outline-none focus:outline-none text-sm sm:text-base font-bold font-manrope relative py-2 px-10 h-14 inline-flex items-center   justify-center bg-skin-blue-800 hover:bg-skin-blue-800/90 text-white before:absolute before:w-full before:h-full before:bg-skin-pink-300 before:-z-10 before:-top-2 before:rounded-10 before:-left-2 after:absolute  after:w-full after:h-full  after:bg-skin-yellow-600 after:-z-10 after:top-2 after:rounded-10 after:left-2",
        className
      )}
    >
      {children}
    </button>
  );
};

export default CustomButton;
