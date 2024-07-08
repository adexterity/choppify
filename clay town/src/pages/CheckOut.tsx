import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const CheckOut = () => {
  return (
    <section className="bg-[#F7F0DD] min-h-screen pt-32">
      <Navbar />
      <div>
        <div className="flex gap-3 items-center pl-10 mb-5">
          <NavLink to="address">
            <p className="text-2xl">Address</p>
          </NavLink>
          <img src="/src/assets/images/chevron-right.svg" alt="icon" />

          <NavLink to="shipping">
            <p className="text-[#00000091] text-2xl">Shipping</p>
          </NavLink>
          <img src="/src/assets/images/chevron-right.svg" alt="icon" />

          <NavLink to="payment">
            <p className="text-2xl text-[#00000091]">Payment</p>
          </NavLink>
        </div>
          <Outlet />
        </div>
        
    </section>
  );
};

export default CheckOut;
