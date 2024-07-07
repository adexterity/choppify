import { FaRegUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  return (
    <nav className="absolute top-1 border border-black flex justify-between  min-w-full px-10 py-5 items-center">
      <h2>Claytown</h2>
      <ul className="md:flex gap-10 text-2xl hidden">
        <li>
          {" "}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
      </ul>
      <ul>
        <li className="flex gap-4 items-center">
          <span>
            <IoSearchSharp />
          </span>
          <span>
            <TiShoppingCart />
          </span>
          <span>
            <FaRegUser />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
