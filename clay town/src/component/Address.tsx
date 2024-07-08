const Address = () => {
  return (
    <div className="flex gap-2">
      <div className="bg-white w-[1000px] pt-10 rounded-lg h-[500px]">
        <div className="flex justify-between pl-3 pr-10 ">
          <div className="flex gap-5 bg-red">
            <div>
              <img src="/src/assets/images/radio_selected.svg" alt="radio" />
            </div>
            <div>
              <p>
                <span className="font-semibold text-2xl">Lagos Nigeria </span>
                <br /> <br /> Ojuelegba <br /> <br /> Contact- (936) 361-0310
              </p>
            </div>
            <div>
              <img src="/src/assets/images/tag.svg" alt="radio" />
            </div>
          </div>
          <div className="flex gap-3">
            <p className="text-[#00000091]">Edit</p>
            <span>|</span>
            <p className="text-red-600">Remove</p>
          </div>
        </div>
        <div className="flex justify-between pl-3 pr-10 mt-10">
          <div className="flex gap-5">
            <div>
              <img src="/src/assets/images/radio_off.svg" alt="radio" />
            </div>
            <div>
              <p>
                <span className="font-semibold text-2xl">Lagos Nigeria </span>
                <br /> <br /> Akoka <br /> <br /> Contact- (936) 361-0310
              </p>
            </div>
            <div>
              <img src="/src/assets/images/tag2.svg" alt="radio" />
            </div>
          </div>
          <div className="flex gap-3">
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
      <div className="  bg-white w-[300px] p-3 rounded-lg h-[400px]">
        <h2>Order Summary</h2>
        <div>
          <span>Price</span>
          <span>NGN61,600</span>
        </div>
        <div>
          <span>Discount</span>
          <span>NGN61,600</span>
        </div>
        <div>
          <span>Shipping</span>
          <span>NGN61,600</span>
        </div>
        <div>
          <span>Coupon Applied</span>
          <span>NGN61,600</span>
        </div>
        <hr />
        <div>
          <span>TOTAL</span>
          <span>TOTAL</span>
        </div>
        <div>
          <span>Estimated Delivery by</span>
          <span>TOTAL</span>
        </div>
        <div>
          <span>coupon code</span>
          <span>TOTAL</span>
        </div>
        <button>Continue to Shipping</button>
      </div>
    </div>
  );
};

export default Address;
