import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementItem,
  incrementItem,
  removeItem,
} from "../state/counter/counterSlice";
import { RootState } from "../state/store";
import { formatCurrency } from "../utils/utils";

const CartItem = ({ item }) => {
  const cart = useSelector((state: RootState) => state.counter.cart);

  const itemCount = cart.find((count) => count.id === item.id);

  const dispatch = useDispatch();


  return (
    <>
      <li className="flex justify-between items-center">
        <div className="flex items-center  gap-2 md:gap-5">
          <div>
            <img src="/images/circle.svg" alt="circle" />
          </div>
          <div>
            <img
              src={`${item.image}`}
              className="rounded-md w-[60px] h-auto md:w-28 md:h-28"
              alt="product-image"
            /> 
            {/* <img
              src={`${/images/product-image2.png}`}
              className="rounded-md w-[60px] h-auto md:w-28 md:h-28"
              alt="product-image"
            /> */}
            <span
              className="md:flex hidden items-center gap-2 text-[#FF7810] text-2xl cursor-pointer"
              onClick={() => dispatch(removeItem(item))}
            >
              <FaRegTrashAlt className="inline" /> Remove
            </span>
          </div>
          <div className="flex flex-col justify-between gap-5">
            <h2 className="font-semibold  text-sm md:text-xl">{item.title}</h2>
            <p className="text-[#FF7810]">in stock</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="md:text-xl text-sm">
            {formatCurrency(item.itemTotalPrice)}
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => dispatch(decrementItem(item))}
              className="bg-[#FBC47C] w-8 h-8 rounded-[100%] flex justify-center items-center text-[40px]"
            >
              -
            </button>
            <span className="text-2xl">{itemCount?.cartCount}</span>
            <button
              onClick={() => dispatch(incrementItem(item))}
              className="bg-[#FBC47C] w-8 h-8 rounded-[100%] flex justify-center items-center text-[20px]"
            >
              +
            </button>
          </div>
        </div>
      </li>
      <hr className="my-6" />
    </>
  );
};

export default CartItem;
