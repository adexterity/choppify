import Navbar from "../component/Navbar";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleProceedToProduct = () => {
    navigate("/product");
  };

  return (
    <>
      {/*      header section
       */}
      <header className="bg-header-bg bg-cover bg-bottom flex justify-center items-center text-white min-h-screen">
        <Navbar />

        <div className=" flex justify-center items-center flex-col">
          <h1 className="text-2xl md:text-5xl text-center leading-[1] md:leading-[1.5] font-custom">
            Stylish, functional pottery for <br /> modern living
          </h1>
          <h3 className="my-10 p-3 max-w-96 text-xl text-center">
            Discover handmade clay home decor items crafted by the finest
            artisans from around the world
          </h3>
          <button
            className="bg-[#C4C0BD] p-3 rounded-full text-black "
            onClick={handleProceedToProduct}
          >
            Shop now <IoCartOutline className="inline" />
          </button>
        </div>
      </header>
      {/* about us */}
      <section className="bg-[#DED5BC] py-5 ">
        <h2 className="text-center text-2xl md:text-[66px] py-10 md:py-20 font-semibold">
          About us
        </h2>
        <div className="relative font-semi-bold">
          <div className="flex flex-col justify-center items-center">
            <p className=" text-center mb-5 p-3 max-w-[700px] text-xl">
              Claytown is where tradition meets modern craftsmanship. We are
              passionate artisans dedicated to bringing you the finest handmade
              clay and wooden products from around the world
            </p>
            <div className="relative md:w-[400px]">
              <div className="absolute top-[50px] right-[-20px] md:right-[-150px] w-[100px] md:w-[200px]">
                <img src="../images/about-us2.png" alt="image1" />
              </div>
              <img
                src="../images/about-us1.png "
                alt="image2"
                className="w-[250px] md:w-[400px]"
              />

              <div className="absolute bottom-[-40px] -left-[20px] md:-left-[150px] w-[100px] md:w-[200px]">
                <img src="../images/about-us3.png " alt="image3" />
              </div>
            </div>
            <div className=" p-3  flex justify-center flex-col text-center items-center mt-24">
              <p className=" mb-5 max-w-[700px] text-xl">
                Our curated collection celebrates the artistry and cultural
                heritage of skilled craftsmen, ensuring every piece tells a
                unique story.
              </p>
              <button className="bg-[#D8A873] py-3 px-5 rounded-full border border-[#1c1c1c48]">
                Read more
              </button>
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
        </ul>

        <ul className="flex justify-around flex-wrap">
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
      </section>
      {/* our product section */}
      <section className="bg-[#DED5BC] py-3 min-h-screen">
        <h2 className="text-center text-2xl md:text-[66px] py-[60px] md:py-[120px] font-semibold">
          Our Products
        </h2>
        
        <ul className="flex justify-around  mb-10 md:mb-20 flex-wrap">
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
        <p className="text-[#FF7810] text-right pr-4 text-3xl md:text-5xl pb-5 md:pb-9">
          see more
        </p>
      </section>

      {/* subscription section */}
      <section className="bg-subscribe-bg bg-bottom bg-cover text-white flex justify-center items-center flex-col py-4">
        <h2 className="text-2xl md:text-[65px] text-center my-10">
          Subscribe to our newsletter
        </h2>
        <p className="text-center text-xl">
          Be the first to know about our latest arrivals, exclusive offers
        </p>
        <p className="text-center w-96 text-2xl">
          Join us now and get 10% discount off your first purchase
        </p>
        <button className="rounded-full bg-[#fbc47cbb] px-4 py-2 text-2xl my-10 text-black border border-[#202020]">
          Subscribe
        </button>
      </section>

     
    </>
  );
};

export default HomePage;
