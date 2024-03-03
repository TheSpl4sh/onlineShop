import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';
import './reset.scss'
import CardPage from './Pages/card-page/CardPage'

import './reset.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <CardPage/>
       <Footer/>
    </div>
  );
}

export default App;

