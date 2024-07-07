import { FaRegTrashAlt } from "react-icons/fa";
import Navbar from "../component/Navbar";

const CartPage = () => {
  return (
      <section className="bg-[#DED5BC] min-h-screen pt-32 px-10 relative">
        <Navbar />
      <div className=" bg-[#FCF9F1] rounded-md px-10 py-4">
        <h2 className="text-4xl mb-9 font-semibold">Cart (3)</h2>
        <ul>
          <li className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <div><img src="src/assets/images/circle.svg" alt="circle" /></div>
              <div className="flex flex-col items-center gap-3 ">
                <img
                  src="src/assets/images/product-image2.png"
                  className="rounded-md w-28 h-28"
                  alt="product-image"
                />
                <span className="flex items-center gap-2 text-[#FF7810] text-2xl">
                  <FaRegTrashAlt className="inline" /> Remove
                </span>
              </div>
              <div className="flex flex-col justify-between gap-5">
                <h2 className="font-semibold text-xl">Abstract Art</h2>
                <p className="text-[#FF7810]">in stock</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="text-xl">NGN20,000</p>
              <div><img src="src/assets/images/addReduce.svg" alt="" /></div>
            </div>
          </li>

          <hr className="my-6" />
          <li className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <div><img src="src/assets/images/circle.svg" alt="circle" /></div>
              <div className="flex flex-col items-center gap-3 ">
                <img
                  src="src/assets/images/product-image2.png"
                  className="rounded-md w-28 h-28"
                  alt="product-image"
                />
                <span className="flex items-center gap-2 text-[#FF7810] text-2xl">
                  <FaRegTrashAlt className="inline" /> Remove
                </span>
              </div>
              <div className="flex flex-col justify-between gap-5">
                <h2 className="font-semibold text-xl">Abstract Art</h2>
                <p className="text-[#FF7810]">in stock</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="text-xl">NGN20,000</p>
              <div><img src="src/assets/images/addReduce.svg" alt="" /></div>
            </div>
          </li>
          <hr className="my-6" />

          <li className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <div><img src="src/assets/images/circle.svg" alt="circle" /></div>
              <div className="flex flex-col items-center gap-3 ">
                <img
                  src="src/assets/images/product-image2.png"
                  className="rounded-md w-28 h-28"
                  alt="product-image"
                />
                <span className="flex items-center gap-2 text-[#FF7810] text-2xl">
                  <FaRegTrashAlt className="inline" /> Remove
                </span>
              </div>
              <div className="flex flex-col justify-between gap-5">
                <h2 className="font-semibold text-xl">Abstract Art</h2>
                <p className="text-[#FF7810]">in stock</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="text-xl">NGN20,000</p>
              <div><img src="src/assets/images/addReduce.svg" alt="" /></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CartPage;
