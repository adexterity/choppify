import HomePage from "./pages/HomePage";

import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";
import Address from "./component/Address";
import Shipping from "./component/Shipping";
import Payment from "./component/Payment";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Electronics from "./component/Electronics";
import MensWear from "./component/MensWear";
import WomensWear from "./component/WomensWear";
import AllCategory from "./component/AllCategory";

function App() {
  const location = useLocation();

  // Define paths where the Footer should not be shown
  const pathsWithoutFooter = [
    "/checkout/payment",
    "/checkout/shipping",
    "/checkout/address",
    "/checkout",
    "/cart",
  ];

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<ProductPage />}>
          <Route index element={<Navigate replace to="allProduct" />} />

          <Route index path="allProduct" element={<AllCategory />} />
          <Route  path="electronics" element={<Electronics />} />
          <Route path="mens" element={<MensWear />} />
          <Route path="womens" element={<WomensWear />} />
        </Route>
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckOut />}>
          <Route index element={<Navigate replace to="address" />} />
          <Route index path="address" element={<Address />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="address" element={<Address />} />
        </Route>
      </Routes>

      {/* Conditionally render footer */}
      {!pathsWithoutFooter.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
