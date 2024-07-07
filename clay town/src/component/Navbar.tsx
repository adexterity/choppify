import { FaRegUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-1 left-0 border border-black flex justify-between  min-w-full px-10 py-5 items-center">
      <h2><img src="/src/assets/images/logo.svg" alt="" /></h2>
      <ul className="md:flex gap-10 text-2xl hidden">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Products</Link>
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
            <Link to="/cart">
              <TiShoppingCart />
            </Link>
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
