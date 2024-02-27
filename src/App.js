import Card from './components/Card/Card';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CartPage from './pages/CartPage/CartPage'


import './App.css';
import './reset.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <CartPage />
      <Card />
      <Footer />   
    </div>
  );
}

export default App;

