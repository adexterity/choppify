import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { getJewelery } from "../utils/utils";
import {  NavLink, Outlet } from "react-router-dom";

const ProductPage = () => {
  const [jeweleryProduct, setJeweleryProduct] = useState([]);

  useEffect(() => {
    async function getAllJewelery() {
      const getJeweleryCategory = await getJewelery();
      console.log(getJeweleryCategory, "getJeweleryCategory: productPage");

      setJeweleryProduct(getJeweleryCategory);
    }
    getAllJewelery();
  }, []);

  console.log(jeweleryProduct, "jeweleryProduct: productPage");
  return (
    <>
      <section className="pt-36 pb-5 bg-[#DED5BC] min-h-screen">
        <h2 className="text-center font-semibold text-4xl pb-10">categories</h2>
        <ul className="flex justify-center gap-5 md:gap-20 md:text-3xl font-semibold ">
          <NavLink to='allProduct'>
            <li>All</li>
          </NavLink>
          <NavLink  to='electronics'>
            <li>Electronics</li>
          </NavLink>
          <NavLink  to='mens'>
            <li>Men's Wear</li>
          </NavLink>
          <NavLink  to='womens'>
            <li>Women's Wear</li>
          </NavLink>
        </ul>
        <div className=" w-[60%] h-3 bg-black m-auto my-4 mb-10">
          <div className="bg-yellow-500 h-3 w-[15%] border border-t-4 border-black"></div>
        </div>
        <Outlet />
        <ul className="flex justify-around mb-20 flex-wrap">
          <li className="p-2 bg-white rounded shadow-2xl mb-5">
            <div className="bg-product2-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
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
            <div className="bg-product4-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
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
            <div className="bg-product6-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
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
            <div className="bg-product2-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
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
            <div className="bg-product5-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
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
            <div className="bg-product1-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
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
            <div className="bg-product4-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
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
            <div className="bg-product6-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
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
            <div className="bg-product5-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
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

        <div className="flex justify-center pb-40  md:w-full px-10">
          <img src="/images/pagination.svg" alt="pagination" />
        </div>
      </section>
    </>
  );
};

export default ProductPage;
