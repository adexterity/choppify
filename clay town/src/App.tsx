import HomePage from "./pages/HomePage";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
      {/* 
      <CheckoutPage/>
      <FavoritePage/> */}
    </div>
  );
}

export default App;
