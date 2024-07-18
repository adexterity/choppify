import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { increment } from "../state/counter/counterSlice";
import { formatCurrency } from "../utils/utils";

const ItemCard = ({ item }) => {

  const dispatch = useDispatch();

  return (
    <li className="p-2 bg-white rounded shadow-2xl w-[310px] mb-8 flex flex-col">
      <div
        className={`bg-[${item.image}] bg-no-repeat bg-center bg-contain w-[300px] h-[300px]`}
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className={`flex justify-between p-1`}>
          <span></span>
          <p className="bg-[#ffffff93] rounded-full p-2">
            rating: {item.rating.rate}
          </p>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <div className="flex flex-col">
          <p className="font-medium text-xl  ">{item.title}</p>
          <p>{formatCurrency(item.price)}</p>
          <div className="py-3">
            <i className="fa-solid fa-star text-[#FFAE34]"></i>
            <i className="fa-solid fa-star text-[#FFAE34]"></i>
            <i className="fa-solid fa-star text-[#FFAE34]"></i>
            <i className="fa-solid fa-star text-[#FFAE34]"></i>
            <i className="fa-solid fa-star text-[#FFAE34]"></i>
          </div>
        </div>

        <div>
          <CiHeart />
        </div>
      </div>
      <button
        onClick={() => dispatch(increment(item))}
        className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48] self-start justify-self-end "
      >
        Add to cart
      </button>
    </li>
  );
};

export default ItemCard;
