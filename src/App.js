import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CartPage from './Pages/CartPage/CartPage'
import MainPage from './Pages/MainPage/MainPage'
import Banner from './components/Banner/Banner'
import './App.css'



function App() {
  return (
    <div className="App">
      <Header />
      {/* <CartPage /> */}
      <Banner />
      <MainPage />
      <Footer />   


    </div>
  );
}

export default App;