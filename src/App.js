import Header from "./components/Header/Header"
import './App.css';
import './reset.scss'
import DiscountCard from './components/discount-card/DiscountCard'
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <DiscountCard/>
      <Header />
      <h1>TEST TEXT</h1>
      <Footer />
    </div>
  );
}

export default App;
