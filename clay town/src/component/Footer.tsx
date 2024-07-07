const Footer = () => {
  return (
    <footer className="flex justify-center items-center flex-col pt-16">
      <div className="flex  justify-center md:justify-start  gap-1 md:gap-44">
        <div>
          <h2 className=" text-sm md:text-xl font-medium md:font-semibold pb-4">
            Customer service
          </h2>
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
  );
};

export default Footer;
