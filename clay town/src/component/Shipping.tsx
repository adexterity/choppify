import { useNavigate } from "react-router-dom";



const Shipping = () => {

  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate("/checkout/payment");
  };
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="flex gap-2 justify-center flex-wrap px-2">
      <div className="bg-white w-[1000px] pt-10 rounded-lg min-h-[500px] pl-4 mb-5 ml-3">
        <form className="w-[500px] px-2 ">
          <h1 className="font-semibold text-2xl my-4">Shipping Details</h1>
          <div className="flex justify-between items-center">
            <p>use saved address</p>
            <p className="rounded-full bg-[#FCF2E1] p-3 flex gap-5">
              <span>123, Allen Avenue</span>
              <span className="ml-2">
                <img src="/images/arrow-down-s-fill.svg" alt="dropdown" />
              </span>
            </p>
          </div>
          <p className="py-2 text-[#00000075]">first line of address</p>
          <div className="flex  bg-[#FCF2E1] py-3 w-full rounded-full px-5 justify-between">
            <span>123</span>
            <span>
              <img src="/images/checkbox-circle-fill.svg" alt="dropdown" />
            </span>
          </div>
          <p className="py-2 text-[#00000075]">street name</p>
          <div className="flex  bg-[#FCF2E1] py-3 w-full rounded-full px-5 justify-between">
            <span>Allen Avenue</span>
            <span>
              <img src="/images/checkbox-circle-fill.svg" alt="dropdown" />
            </span>
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="py-2 text-[#00000075]">Postcode</h3>
              <p className="py-3 pl-5 pr-20 bg-[#FCF2E1]  rounded-full">
                ABC-123
              </p>
            </div>
            <div>
              <h3 className="py-2 text-[#00000075]"> Select shipping</h3>
              <p className="py-3 px-5 bg-[#FCF2E1]  rounded-full flex items-center justify-between gap-20">
                <span>Free delivery</span>{" "}
                <span>
                  <img src="/images/arrow-down-s-fill.svg" alt="dropdown" />
                </span>
              </p>
            </div>
          </div>
          <hr className="my-8 w-[90%] m-auto" />
        </form>
        <div className="flex gap-7 justify-center mb-10">
          <button onClick={handleHome}>Cancel order</button>

         
            <button  onClick={handleProceedToPayment} className=" bg-[#DFAE72] py-2 px-10 rounded-full text-white">
              Payment
            </button>
      
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
          <button onClick={handleProceedToPayment}
            className="my-4 bg-[#DFAE72] rounded-full 
         py-2 px-6  text-white"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
