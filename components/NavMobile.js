import Link from "next/link";

const NavMobile = ({ navData }) => {
  return (
    <nav className="bg-accent h-screen w-full p-4">
      {/* nav list */}
      <ul className="flex flex-col gap-y-20 items-center h-screen justify-center text-4xl">
        {navData.map((item, idx) => {
          // destructure item
          const { name, href } = item;
          return (
            <li key={idx}>
              <Link href={href}>
                <a className="text-black font-bold hover:text-white">{name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
