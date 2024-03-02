import './reset.scss'
import './App.css';
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