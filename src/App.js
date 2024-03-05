import "./App.css";
import "./reset.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./Pages/MainPage/MainPage";
import AllProductsPage from "./Pages/AllProductsPage/AllProductsPage"


function App() {
  return (
    <div className="App">
      <Header />
      <AllProductsPage />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
