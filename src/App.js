import "./App.css";
import "./reset.scss";

import { MainPage } from "./Pages/MainPage/MainPage";
import { CartPage } from "./Pages/CartPage/CartPage";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Pages/Layout/Layout";
import { NotFound } from "./Pages/NotFound/NotFound";
import { AllProductsPage } from "./Pages/AllProductsPage/AllProductsPage";
import { PlacingOrder } from "./Pages/PlacingOrder/PlacingOrder";
import { AuthPage } from "./Pages/AuthPage/AuthPage";
import { SignUpPage } from "./Pages/SignUpPage/SignUpPage";
import { CardPage } from "./Pages/card-page/CardPage";
import { Contacts } from "./Pages/Contacts/Contacts";
import { MenClothingPage } from "./Pages/MenClothingPage/MenClothingPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index path="/" element={<MainPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="catalog" element={<AllProductsPage />} />
                    <Route path="order" element={<PlacingOrder />} />
                    <Route path="auth" element={<AuthPage />} />
                    <Route path="signup" element={<SignUpPage />} />
                    <Route path="card" element={<CardPage />}/>
                    <Route path="contacts" element={<Contacts />}/>
                    <Route path="men" element ={<MenClothingPage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
