import HomePage from "./pages/HomePage";

import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";
import Address from "./component/Address";
import Shipping from "./component/Shipping";
import Payment from "./component/Payment";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckOut />}>
            <Route index element={<Navigate replace to="address" />} />
            <Route index path="address" element={<Address />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* 
      <CheckoutPage/>
      <FavoritePage/> */}
    </div>
  );
}

export default App;
