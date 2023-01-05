import Link from "next/link";

const NavMobile = ({ navData }) => {
  return (
    <nav className="bg-accent h-screen w-full p-4 bg-[#fff]">
      {/* nav list */}
      <ul className="flex flex-col gap-y-20 items-center h-screen justify-center text-4xl">
        {navData.map((item, idx) => {
          // destructure item
          const { name, href } = item;
          return (
            <li key={idx}>
              <Link
                href={href}
                className="text-black font-bold hover:text-[#F2790C]"
              >
                {" "}
                {name}
              </Link>
            </li>
          );
        })}
        <Link href="contactform">
          <button className="btn text-2xl">Work with us</button>
        </Link>
      </ul>
    </nav>
  );
};

export default NavMobile;
