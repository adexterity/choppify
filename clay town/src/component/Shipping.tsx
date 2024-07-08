const Shipping = () => {
  return (
    <div className="flex gap-2">
      <div className="bg-white w-[1000px] pt-10 rounded-lg h-[500px]">



        
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
            <img src="../src/assets/images/Trailing-Icon.svg" alt="icon" />
          </span>
        </div>
        <div className="m-auto flex justify-center ">
          <button
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

export default Shipping;
