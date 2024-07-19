import Navbar from "../component/Navbar";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import { clearCart } from "../state/counter/counterSlice";

import { formatCurrency } from "../utils/utils";
import CartSummaryTable from "./CartSummaryTable";

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.counter.cart);
  const totalPrice = useSelector(
    (state: RootState) => state.counter.totalPrice
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <section className="bg-[#DED5BC] min-h-screen pt-32 pb-24  px-4 md:px-10 relative">
      <Navbar />
      <div className=" bg-[#FCF9F1] rounded-md px-3 md:px-10 py-4">
        <h2 className="text-2xl md:text-4xl mb-9 font-semibold">
          Cart ({cart.length})
        </h2>

        <ul>
          {cart.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
          {cart.length > 0 ? (
            <div className="flex justify-center items-center text-[#FF7810] text-2xl">
              <button onClick={() => dispatch(clearCart())}>
                {" "}
                <FaRegTrashAlt className="inline" /> clear Cart
              </button>{" "}
            </div>
          ) : null}
        </ul>
      </div>
      <div className="bg-[#FCF9F1] mt-8 rounded-lg max-w-[600px] px-5 pt-3 pb-5">
        <h2 className="font-semibold text-2xl">Cart Summary</h2>

        <CartSummaryTable cart={cart} />
      </div>
      <button
        className="text-[#FF7810] absolute bottom-4 right-4
"
        onClick={handleHome}
      >
        Back to home
      </button>
    </section>
  );
};

export default CartPage;
