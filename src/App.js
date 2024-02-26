import './App.css';
import './reset.scss'
// import Card from './components/Card/Card';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainPage from './Pages/MainPage/MainPage'




function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />   
    </div>
  );
}

export default App;
