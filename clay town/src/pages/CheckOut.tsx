import Navbar from "../component/Navbar";

const CheckOut = () => {
  return (
    <section className="bg-[#F7F0DD] min-h-screen pt-32">
      <Navbar />
      <div>
        <div className="flex gap-3 items-center pl-10 mb-5">
          <p className="text-2xl">Address</p>
          <img src="/src/assets/images/chevron-right.svg" alt="icon" />
          <p className="text-[#00000091] text-2xl">Shipping</p>
          <img src="/src/assets/images/chevron-right.svg" alt="icon" />
          <p className="text-2xl text-[#00000091]">Payment</p>
        </div>
        <div className="flex justify-between px-10">
          <div className="flex gap-5">
            <div><img src="/src/assets/images/radio_selected.svg" alt="radio" /></div>
            <div>
              <p>
                <span className="font-semibold text-2xl">Lagos Nigeria </span>
                <br />  <br /> Ojuelegba <br /> <br />  Contact- (936) 361-0310
              </p>
            </div>
            <div><img src="/src/assets/images/tag.svg" alt="radio" /></div>
          </div>
          <div className="flex gap-3">
            <p className="text-[#00000091]">Edit</p>
            <span>|</span>
            <p className="text-red-600">Remove</p>
          </div>
        </div>
        <div className="flex justify-between px-10 mt-10">
          <div className="flex gap-5">
            <div><img src="/src/assets/images/radio_off.svg" alt="radio" /></div>
            <div>
              <p>
                <span className="font-semibold text-2xl">Lagos Nigeria </span>
                <br />  <br /> Akoka <br /> <br />  Contact- (936) 361-0310
              </p>
            </div>
            <div><img src="/src/assets/images/tag2.svg" alt="radio" /></div>
          </div>
          <div className="flex gap-3">
            <p className="text-[#00000091]">Edit</p>
            <span>|</span>
            <p className="text-red-600">Remove</p>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default CheckOut;
