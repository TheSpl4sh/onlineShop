import "./App.css";
import "./reset.scss";

import { MainPage } from "./Pages/MainPage/MainPage";
import { CartPage } from './Pages/CartPage/CartPage'
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Pages/Layout/Layout";
import { NotFound } from "./Pages/NotFound/NotFound";
import { AllProductsPage } from "./Pages/AllProductsPage/AllProductsPage";
import { PlacingOrder } from "./Pages/PlacingOrder/PlacingOrder";
// import { CardPage } from "./Pages/card-page/CardPage";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<MainPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="catalog" element={<AllProductsPage />}/>
        <Route path="order" element={<PlacingOrder />}/>
        {/* <Route path="card" element={<CardPage />}/> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;