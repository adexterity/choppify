import { useState } from "react";
import Navbar from "../component/Navbar";
import { IoCartOutline, IoHeartSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const HomePage = () => {
  const [isFav, setIsFav] = useState(false);



  return (
    <>
      {/*      header section
       */}
      <header className="bg-header-bg bg-cover bg-bottom flex justify-center items-center text-white min-h-screen ">
        <Navbar />

        <div className=" flex justify-center items-center flex-col">
          <h1 className="text-5xl text-center leading-[1.5]">
            Stylish, functional pottery for <br /> modern living
          </h1>
          <h3 className="my-10 w-96 text-xl text-center">
            Discover handmade clay home decor items crafted by the finest
            artisans from around the world
          </h3>
          <button className="bg-[#C4C0BD] p-3 rounded-full text-black">
            Shop now <IoCartOutline className="inline" />
          </button>
        </div>
      </header>
      {/* about us */}
      <section className="bg-[#DED5BC] py-5 ">
        <h2 className="text-center text-2xl md:text-[66px] py-10 md:py-20 font-semibold">About us</h2>
        <div className="relative">
          <div className="flex justify-center items-center">
            <div className="relative border border-black md:first:w-[400px]">
              <p className="lg:w-[273px] text-center border border-black p-3 lg:absolute md:-left-[300px]  ">
                Claytown is where tradition meets modern craftsmanship. We are
                passionate artisans dedicated to bringing you the finest
                handmade clay and wooden products from around the world
              </p>
              <div className="absolute top-[50px] right-[-150px]">
                <img src="../src/assets/images/about-us2.png" alt="image1" />
              </div>
              <img src="../src/assets/images/about-us1.png " alt="image2" />

              <div className="absolute bottom-[-70px] -left-[150px]">
                <img src="../src/assets/images/about-us3.png " alt="image3" />
              </div>
              <div className="border border-black p-3  absolute -right-[330px] -bottom-1 flex justify-center flex-col text-center items-center">
                <p className="lg:w-[273px] mb-5 lg:absolute md:-left-[300px] ">
                  Our curated collection celebrates the artistry and cultural
                  heritage of skilled craftsmen, ensuring every piece tells a
                  unique story.
                </p>
                <button className="bg-[#D8A873] p-3 rounded-full border border-[#1c1c1c48]">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* best seller section */}

      <section className="bg-[#DED5BC] py-3 min-h-screen">
        <h2 className="text-center text-2xl md:text-[66px]   py-10 md:py-20  font-semibold">
          Our best sellers
        </h2>

        <ul className="flex justify-around mb-20 flex-wrap">
          <li className="p-2 border border-black rounded">
            <div className="bg-product1-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div
                className={`flex justify-between p-1`}
                onClick={()=>{
                  setIsFav(!isFav);
                }}
              >
                <span>{isFav ? <IoHeartSharp className="text-red-600" /> : <CiHeart />}</span>
                <p className="border border-black rounded-full p-2">
                  Best seller
                </p>
              </div>
            </div>
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
          </li>
          <li className="p-2 border border-black rounded">
            <div className="bg-product2-bg bg-no-repeat bg-bottom bg-cover w-[300px] h-[300px] ">
              <div className="flex justify-between p-1">
                <span onClick={() => {
                  setIsFav(!isFav);
                  console.log(isFav);
                }}>
                  {isFav ? (
                    <IoHeartSharp className="text-red-600" />
                  ) : (
                    <CiHeart />
                  )}{" "}
                </span>
                <p className="border border-black rounded-full p-2">
                  Best seller
                </p>
              </div>
            </div>
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
          </li>
          <li className="p-2 border border-black rounded">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className="flex justify-between p-1">
                <span onClick={() => {
                  setIsFav(!isFav);
                  console.log(isFav);
                }}>{isFav ? <IoHeartSharp className="text-red-600"/> : <CiHeart />} </span>
                <p className="border border-black rounded-full p-2">
                  Best seller
                </p>
              </div>
            </div>
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
          </li>
        </ul>
        <ul className="flex justify-around flex-wrap">
          <li className="p-2 border border-black rounded">
            <div className="bg-product4-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className="flex justify-between p-1">
                <span onClick={() => {
                  setIsFav(!isFav);
                  console.log(isFav);
                }}>{isFav ? <IoHeartSharp className="text-red-600"/> : <CiHeart />} </span>
                <p className="border border-black rounded-full p-2">
                  Best seller
                </p>
              </div>
            </div>
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
          </li>
          <li className="p-2 border border-black rounded">
            <div className="bg-product5-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className="flex justify-between p-1">
                <span onClick={() => {
                  setIsFav(!isFav);
                  console.log(isFav);
                }}>{isFav ? <IoHeartSharp className="text-red-600"/> : <CiHeart />} </span>
                <p className="border border-black rounded-full p-2">
                  Best seller
                </p>
              </div>
            </div>
            <div>
              <p className="font-medium text-xl  ">Abstract art</p>
              <p>NGN 20,000</p>
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
          </li>
          <li className="p-2 border border-black rounded">
            <div className="bg-product6-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className="flex justify-between p-1">
                <span onClick={() => {
                  setIsFav(!isFav);
                  console.log(isFav);
                }}>{isFav ? <IoHeartSharp className="text-red-600" /> : <CiHeart />} </span>
                <p className="border border-black rounded-full p-2">
                  Best seller
                </p>
              </div>
            </div>
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
          </li>
        </ul>
      </section>
      {/* our product section */}
      <section className="bg-[#DED5BC] py-3 min-h-screen">
        <h2 className="text-center text-2xl md:text-[66px] py-[120px] font-semibold">
          Our Products
        </h2>
        <ul className="flex justify-around mb-20 flex-wrap">
          <li className="p-2 border border-black rounded">
            <div className="bg-product1-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div
                className="flex justify-between p-1"
                onClick={() => setIsFav(!isFav)}
              >
                <span onClick={() => {
                  setIsFav(!isFav);
                  console.log(isFav);
                }}>{isFav ? <IoHeartSharp className="text-red-600" /> : <CiHeart />} </span>
                <p className="border border-black rounded-full p-2">
                  Best seller
                </p>
              </div>
            </div>
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
          </li>
          <li className="p-2 border border-black rounded">
            <div className="bg-product2-bg bg-no-repeat bg-bottom bg-cover w-[300px] h-[300px] ">
              <div className="flex justify-between p-1">
                <span onClick={() => setIsFav(!isFav)}>
                  {isFav ? <IoHeartSharp className="text-red-600"/> : <CiHeart />}{" "}
                </span>
                <p className="border border-black rounded-full p-2">
                  Best seller
                </p>
              </div>
            </div>
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
          </li>
          <li className="p-2 border border-black rounded">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className="flex justify-between p-1">
                <span onClick={() => setIsFav(!isFav)}>
                  {isFav ? <IoHeartSharp className="text-red-600"/> : <CiHeart />}{" "}
                </span>
                <p className="border border-black rounded-full p-2">
                  Best seller
                </p>
              </div>
            </div>
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
          </li>
        </ul>
        <ul className="flex justify-around mb-20 flex-wrap">
          <li className="p-2 border border-black rounded">
            <div className="bg-product1-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className="flex justify-between p-1">
                <span onClick={() => {
                  setIsFav(!isFav);
                  console.log(isFav);
                }}>
                  {isFav ? <IoHeartSharp className="text-red-600"/> : <CiHeart />}{" "}
                  </span>
                <p className="border border-black rounded-full p-2">
                  Best seller
                </p>
              </div>
            </div>
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
          </li>
          <li className="p-2 border border-black rounded">
            <div className="bg-product2-bg bg-no-repeat bg-bottom bg-cover w-[300px] h-[300px] ">
              <div className="flex justify-between p-1">
                <span onClick={() => {
                  setIsFav(!isFav);
                  console.log(isFav);
                }}>
                {isFav ? <IoHeartSharp className="text-red-600"/> : <CiHeart />}{" "}
                </span>
                <p className="border border-black rounded-full p-2">
                  Best seller
                </p>
              </div>
            </div>
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
          </li>
          <li className="p-2 border border-black rounded">
            <div className="bg-product3-bg bg-no-repeat bg-center bg-cover w-[300px] h-[300px] ">
              <div className="flex justify-between p-1">
                <span onClick={() => {
                  setIsFav(!isFav);
                  console.log(isFav);
                }}>
                {isFav ? <IoHeartSharp className="text-red-600"/> : <CiHeart />}{" "}
                </span>
                <p className="border border-black rounded-full p-2">
                  Best seller
                </p>
              </div>
            </div>
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
          </li>
        </ul>
        <p className="text-[#FF7810] text-right pr-4 text-5xl pb-9">see more</p>
      </section>

      {/* subscription section */}
      <section className="bg-subscribe-bg bg-bottom bg-cover text-white flex justify-center items-center flex-col py-4">
        <h2 className="text-2xl md:text-[65px]">Subscribe to our newsletter</h2>
        <p>Be the first to know about our latest arrivals, exclusive offers</p>
        <p>Join us now and get 10% discount off your first purchase</p>
        <button className="rounded-full bg-[#fbc47cbb] px-4 py-2 text-2xl my-10 text-black">
          Subscribe
        </button>
      </section>

      {/* footer */}
      <footer className="flex justify-center items-center flex-col pt-16">
        <div className="flex  justify-center md:justify-start  gap-1 md:gap-44">
          <div>
            <h2 className=" text-sm md:text-xl font-medium md:font-semibold pb-4">Customer service</h2>
            <p className="">Home</p>
            <p>Shop</p>
            <p>About Us</p>
            <p>Blog</p>
            <p>Contact Us</p>
            <p>FAQ</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold pb-4 ">Explore</h2>
            <p>Shipping & Returns</p>
            <p>Order Tracking</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Support</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Get in Touch </h2>
            <p>Email: support@craftytown.com</p>
            <p>Phone: 1-800-123-4567</p>
            <p>Address: 123 Craft Lane, Artisan City, AC 12345</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-light self-end mt-10 mb-5">
            ClayTown &copy; 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
