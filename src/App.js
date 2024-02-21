import "./App.css";
import ButtonBlackArrow from "./components/Button/ButtonBlackArrow/ButtonBlackArrow";
import ButtonBlackBasket from "./components/Button/ButtonBlackBasket/ButtonBlackBasket";
import ButtonOrangArrow from "./components/Button/ButtonOrang/ButtonOrang";
import ButtonResponseWhite from "./components/Button/ButtonResponse/White/ButtonResponseWhite";
import SliderCircle from "./components/Button/SliderCircle/SliderCircle";


function App() {
  return (
    <div className="App">
      <ButtonOrangArrow text="GO TO DIRECTORY"
      />
      <ButtonOrangArrow text="MORE DETAIL"/>
      <ButtonBlackArrow />
      <ButtonBlackBasket />
      <ButtonResponseWhite />
      <SliderCircle />
    </div>
  );
}

export default App;
