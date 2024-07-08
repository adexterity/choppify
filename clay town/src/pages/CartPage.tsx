import { FaRegTrashAlt } from "react-icons/fa";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <section className="bg-[#DED5BC] min-h-screen pt-32 pb-24 px-10 relative">
      <Navbar />
      <div className=" bg-[#FCF9F1] rounded-md px-10 py-4">
        <h2 className="text-4xl mb-9 font-semibold">Cart (3)</h2>
        <ul>
          <li className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <div>
                <img src="/images/circle.svg" alt="circle" />
              </div>
              <div className="flex flex-col items-center gap-3 ">
                <img
                  src="/images/product-image2.png"
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
              <div>
                <img src="/images/addReduce.svg" alt="" />
              </div>
            </div>
          </li>

          <hr className="my-6"/>
          <li className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <div>
                <img src="/images/circle.svg" alt="circle" />
              </div>
              <div className="flex flex-col items-center gap-3 ">
                <img
                  src="/images/product-image2.png"
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
              <div>
                <img src="/images/addReduce.svg" alt="" />
              </div>
            </div>
          </li>
          <hr className="my-6" />

          <li className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <div>
                <img src="/images/circle.svg" alt="circle" />
              </div>
              <div className="flex flex-col items-center gap-3 ">
                <img
                  src="/images/product-image2.png"
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
              <div>
                <img src="/images/addReduce.svg" alt="" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-[#FCF9F1] mt-8 rounded-lg max-w-[600px] px-5 pt-3 pb-5">
        <h2 className="font-semibold text-2xl">Cart Summary</h2>
        <table>
          <thead>
            <td className="py-2 px-5 font-semibold">Item Name</td>
            <td className="py-2 px-5 font-semibold">Quality</td>
            <td className="py-2 px-5 font-semibold text-center">Cost</td>
          </thead>
          <tr>
            <td className="py-2 px-5">Abstract art</td>
            <td className="py-2 px-5">1</td>
            <td className="py-2 px-5 text-right">NGN20,000</td>
          </tr>
          <tr>
            <td className="py-2 px-5">Even more abstract</td>
            <td className="py-2 px-5">2</td>
            <td className="py-2 px-5 text-right">NGN40,000</td>
          </tr>
          <tr>
            <td className="py-2 px-5">Soup bowl</td>
            <td className="py-2 px-5">1</td>
            <td className="py-2 px-5 text-right">NGN1,600</td>
          </tr>
          <tr>
            <td className="py-2 px-5"></td>
            <td className="py-2 px-5"></td>
            <td className="py-2 px-5 text-right">Total amount - NGN61,600</td>
          </tr>
          <tr>
            <td className="py-2 px-5"></td>
            <td className="py-2 px-5"></td>
            <td className="py-2 px-5 text-right">Shipping fee - NGN700</td>
          </tr>
          <tr>
            <td className="py-2 px-5"></td>
            <td className="py-2 px-5"></td>
            <td className="py-2 px-5 text-right">Total- NGN62,300</td>
          </tr>
          <tr>
            <td className="py-2 px-5"></td>
            <td className="py-2 px-5"></td>
            <td className="py-2 px-5 text-right  ">
              <Link to="/checkout">
                <button className="border bg-[#FCF2E1] rounded-full px-5 py-3">
                  Checkout
                </button>
              </Link>
            </td>
          </tr>
        </table>
      </div>
      <button
        className="text-[#FF7810] absolute bottom-4 right-4
"
      >
        Back to home
      </button>
    </section>
  );
};

export default CartPage;
