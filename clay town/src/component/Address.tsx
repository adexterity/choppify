import { useNavigate } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/checkout/shipping");
  };
  return (
    <div className="flex gap-2 justify-center flex-wrap px-2">
      <div className="bg-white w-[1000px] pt-10 rounded-lg min-h-[500px] ml-3">
        <div className="flex justify-between pl-3 pr-10 ">
          <div className="flex gap-5 bg-red">
            <div>
              <img src="/images/radio_selected.svg" alt="radio" />
            </div>
            <div>
              <p>
                <span className="font-semibold text-xl md:text-2xl">Lagos Nigeria </span>
                <br /> <br /> Ojuelegba <br /> <br className="hidden md:block" /> Contact- (936) 361-0310
              </p>
            </div>
            <div>
              <img src="/images/tag.svg" alt="radio" />
            </div>
          </div>
          <div className="md:flex gap-3 hidden">
            <p className="text-[#00000091]">Edit</p>
            <span>|</span>
            <p className="text-red-600">Remove</p>
          </div>
        </div>
        <div className="flex justify-between pl-3 pr-10 mt-10">
          <div className="flex gap-5">
            <div>
              <img src="/images/radio_off.svg" alt="radio" />
            </div>
            <div>
              <p>
                <span className="font-semibold  text-xl md:text-2xl">Lagos Nigeria </span>
                <br /> <br /> Akoka <br /> <br className="hidden md:block"/> Contact- (936) 361-0310
              </p>
            </div>
            <div>
              <img src="/images/tag2.svg" alt="radio" />
            </div>
          </div>
          <div className="md:flex gap-3 hidden">
            <p className="text-[#00000091]">Edit</p>
            <span>|</span>
            <p className="text-red-600">Remove</p>
          </div>
        </div>
        <hr className="w-[90%] m-auto my-5" />
        <div className="pl-12 text-[#FBC47C]">
          <span className="text-2xl mr-3">+</span> <span>Add New Address</span>
        </div>
      </div>
      <div className="  bg-white w-[300px] p-3 rounded-lg h-[480px]">
        <h2 className="font-semibold text-2xl pb-5">Order Summary</h2>
        <div className="flex my-4 justify-between">
          <span>Price</span>
          <span>NGN61,600</span>
        </div>
        <div className="flex my-4 justify-between">
          <span>Discount</span>
          <span>0</span>
        </div>
        <div className="flex my-4 justify-between">
          <span>Shipping</span>
          <span>NGN700</span>
        </div>
        <div className="flex my-4 justify-between">
          <span>Coupon Applied</span>
          <span>0</span>
        </div>
        <hr />
        <div className="flex my-4 justify-between">
          <span>TOTAL</span>
          <span>NGN62,300</span>
        </div>
        <div className="flex my-4 justify-between">
          <span>Estimated Delivery by</span>
          <span>01 Sep, 2024</span>
        </div>
        <div className="flex my-4 justify-between border p-2">
          <span>coupon code</span>
          <span>
            <img src="../images/Trailing-Icon.svg" alt="icon" />
          </span>
        </div>
        <div className="m-auto flex justify-center ">
          <button
            onClick={handleNavigate}
            className="my-4 bg-[#DFAE72] rounded-full 
         py-2 px-6  text-white"
          >
            Continue to Shipping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
