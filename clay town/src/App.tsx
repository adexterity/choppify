import HomePage from "./pages/HomePage";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
      {/* 
      <CheckoutPage/>
      <FavoritePage/> */}
    </div>
  );
}

export default App;
