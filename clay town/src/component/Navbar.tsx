import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoMenu, IoSearchSharp } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../state/store";

const Navbar = () => {
const cartCount = useSelector((state: RootState)=>state.counter.cartCount) 
  const [showNavLinks, setshowNavLinks] = useState(false);

  const toggleNavbar = () => setshowNavLinks(!showNavLinks);
  const handleNavigate = () => {
    /*     navigate("/cart");
     */ setshowNavLinks(false);
  };

  const navigate = useNavigate();

  const handleProceedToHome = () => {
    navigate("/");
  };
  return (
    <nav className="absolute top-1 left-0  flex justify-between  min-w-full px-10 py-5 items-center">
      <div
        className="block lg:hidden absolute top-7 left-5"
        onClick={() => {
          handleNavigate();
          toggleNavbar();
        }}
      >
        {showNavLinks ? <IoMdClose size={30} /> : <IoMenu size={30} />}
      </div>
      <h2 onClick={handleProceedToHome}>
        <img src="/images/Logo.svg" alt="logo" className=" w-24 md:w-40" />
      </h2>

      <ul
        className={`md:flex gap-10 text-2xl ${
          showNavLinks
            ? "flex absolute top-20 bg-[#e73737] rounded-lg p-5 left-2 flex-col"
            : "hidden"
        } `}
      >
        <li>
          <Link to="/">Home </Link>
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
          <span className="text-2xl">
            <IoSearchSharp />
          </span>
          <span className="relative">
            <span className="absolute -right-2 top-3 bg-[#e92626] text-white p-1 rounded-full w-5 h-5 flex justify-center items-center">{cartCount}</span>
            <Link to="/cart">
              <TiShoppingCart className="text-3xl"/>
            </Link>
          </span>
          <span className="text-2xl">
            <FaRegUser />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
