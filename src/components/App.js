import { useState } from "react";
import Header from "./Header.js";
import Form from "./Form.js";
import Button from "./Button.js";
import Output from "./Output.js";
import Footer from "./Footer";

function App() {
  //states
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);
  //render
  return (
    <div className="App">
      <header className="App__header"></header>
      <main className="App__main"></main>
      <footer className="App__footer"></footer>
    </div>
  );
}

export default App;
