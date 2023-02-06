import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar({ onChangeMode }) {
  return (
    <nav className="py-8 flex justify-between dark:text-white">
      <h1 className="font-burtons text-xl">Ikram</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={onChangeMode}
            className=" cursor-pointer text-2xl"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-blue-500 text- to-sky-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="/Ikram-Khan.pdf"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
