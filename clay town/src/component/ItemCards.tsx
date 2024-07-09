import { CiHeart } from "react-icons/ci";

const ItemCards = () => {
  const items = [
    {
      image: "bg-product1-bg",
    },
    {
      image: "bg-product2-bg",
    },
    {
      image: "bg-product3-bg",
    },
    {
      image: "bg-product4-bg",
    },
    {
      image: "bg-product5-bg",
    },
    {
      image: "bg-product6-bg",
    },
  ];

  return (
    <ul className="flex justify-around mb-20 flex-wrap">
      {items.map((item, index) => (
        <li className="p-2 bg-white rounded shadow-2xl" key={index}>
          <div
            className={`${item.image} bg-no-repeat bg-center bg-cover w-[300px] h-[300px]`}
          >
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
      ))}
    </ul>
  );
};

export default ItemCards;
