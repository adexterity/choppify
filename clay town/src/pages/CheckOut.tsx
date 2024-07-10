import { NavLink, Outlet } from "react-router-dom";

const CheckOut = () => {
  return (
    <section className="bg-[#F7F0DD] min-h-screen pt-32 pb-10">
      <div>
        <div className="flex md:gap-3 items-center justify-center md:pl-10 mb-5">
          <NavLink to="address">
            <p className="text-sm md:text-2xl">Address</p>
          </NavLink>
          <img src="/images/chevron-right.svg" alt="icon" />

          <NavLink to="shipping">
            <p className="text-[#00000091] text-sm md:text-2xl">Shipping</p>
          </NavLink>
          <img src="/images/chevron-right.svg" alt="icon" />

          <NavLink to="payment">
            <p className="text-[#00000091] text-sm md:text-2xl">Payment</p>
          </NavLink>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default CheckOut;
