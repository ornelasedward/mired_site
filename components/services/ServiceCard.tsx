import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  backgroundColor?: string;
  backgroundClass?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  backgroundColor,
  backgroundClass,
}) => {
  return (
    <Link
      href={link}
      style={backgroundClass ? undefined : { backgroundColor }}
      className={cn(
        "px-3 md:px-6 py-6 md:py-10 min-h-[300px] flex flex-col sm:flex-row items-center gap-5 border border-[#CFC9D4] relative overflow-hidden",
        backgroundClass
      )}
    >
      <div className="w-[20%] ">
        <div className="w-16 md:w-24 h-16 md:h-24 p-4 md:p-7 rounded-full bg-white flex justify-center items-center">
          <Image src={`${icon}`} alt={title} width={130} height={130} />
        </div>
      </div>

      <div className=" w-full sm:w-[80%] flex h-full justify-between flex-col gap-4 items-baseline">
        <h4 className="heading-4">{title}</h4>
        <p className="text-sm md:text-[16px]">{description}</p>
        <Button variant={"secondary"} className=" uppercase">
          learn more
        </Button>
      </div>
    </Link>
  );
};

export default ServiceCard;
