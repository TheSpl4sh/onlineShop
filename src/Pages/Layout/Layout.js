import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import {FavoriteProvider} from "../../components/FavoriteContext";

const Layout = () => {
  return (
    <>
      <FavoriteProvider>
        <Header />
        <main className="g-content">
        <Outlet />
        </main>
      </FavoriteProvider>
      <Footer />
    </>
  );
};

export { Layout };
