import Header from "./components/Header/Header"
import './App.css';
import './reset.scss'
import DiscountCard from './components/discount-card/DiscountCard'
import Footer from './components/Footer/Footer';
import MainPage from "./Pages/MainPage/MainPage";



function App() {
  return (
    <div className="App">
      <DiscountCard/>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
