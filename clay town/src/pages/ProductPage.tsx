import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { CiHeart } from "react-icons/ci";

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <section className="pt-36 pb-5 bg-[#DED5BC] min-h-screen">
        <h2 className="text-center font-semibold text-4xl pb-10">categories</h2>
        <ul className="flex justify-center md:gap-20 md:text-3xl font-semibold">
          <li>All</li>
          <li>Decorative</li>
          <li>Kitchenware</li>
          <li>TableWare</li>
        </ul>
        <div className=" w-[60%] h-3 bg-black m-auto my-4">
          <div className="bg-yellow-500 h-3 w-[15%] border border-t-4 border-black"></div>
        </div>
        <ul className="flex justify-around mb-20 flex-wrap">
          <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
          <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
          <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
        </ul>
        <ul className="flex justify-around mb-20 flex-wrap">
        <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
          <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
          <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
        </ul>
        <ul className="flex justify-around mb-20 flex-wrap">
        <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
          <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
          <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
        </ul>
        <ul className="flex justify-around mb-20 flex-wrap">
        <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
          <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
          <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
        </ul>
        <ul className="flex justify-around mb-20 flex-wrap">
        <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
          <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
          <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
        </ul>
        <ul className="flex justify-around mb-20 flex-wrap">
        <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
          <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
          <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className={`flex justify-between p-1`}>
                <span></span>
                <p className="bg-[#ffffff93] rounded-full p-2">Best seller</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-medium text-xl  ">Still life pottery</p>
                <p>NGN 15,000</p>
                <div className="py-3">
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                  <i className="fa-solid fa-star text-[#FFAE34]"></i>
                </div>
                <button className="bg-[#E2D3B3] p-3 rounded-full border border-[#1c1c1c48]">
                  Add to cart
                </button>
              </div>
              <div>
                <CiHeart />
              </div>
            </div>
          </li>
        </ul>

        <div className="flex justify-center pb-40">
          <img src="/images/pagination.svg" alt="pagination" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductPage;
