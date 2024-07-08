const Payment = () => {
  return (
    <div className="bg-white mx-5 rounded-xl min-h-[500px] mb-5 px-5 pt-5 ">
      <h2 className="my-6">Payment method</h2>
      <ul className="w-[500px]">
        <li className="flex border-2 p-3 justify-between">
          <div className="flex gap-3">
            <span>
              <img src="/images/radio_selected.svg" alt="icon" />
            </span>
            <span>
              <img src="/images/visa.svg" alt="icon" />
            </span>
            <span>•••• 6754</span>
            <span>Expires 06/2021</span>
          </div>

          <button className=" text-[#E14B4B]">Remove</button>
        </li>
        <li className="flex  border-2 p-3 justify-between">
          <div className="flex gap-3">
            <span>
              <img src="/images/radio_off.svg" alt="icon" />
            </span>
            <span >
              <img src="/images/mastercard.svg" alt="icon" />
            </span>
            <span>•••• 5643</span>
            <span>Expires 11/2025</span>
          </div>

          <button className=" text-[#E14B4B]">Remove</button>
        </li>

        <hr  className="my-10" />

        <div className="pl-2 text-[#FBC47C]">
          <span className="text-2xl mr-3">+</span> <span>Add New Address</span>
        </div>
      </ul>
    </div>
  );
};

export default Payment;
