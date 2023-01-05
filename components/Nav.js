import Link from "next/link";

const Nav = ({ navData, header }) => {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-[55px]">
        {navData.map((item, idx) => {
          // destructure item
          const { name, href } = item;
          return (
            <li key={idx}>
              <Link
                href={href}
                className={`${
                  header ? "text-black" : "text-black"
                } cursor-pointer hover:text-accent transition`}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
