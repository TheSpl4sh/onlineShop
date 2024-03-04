import "./App.css";
import "./reset.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./Pages/MainPage/MainPage";
import PlacingOrder from "./Pages/PlacingOrder/PlacingOrder";
import Banner from "../src/components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <PlacingOrder />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
