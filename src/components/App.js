import { useState } from "react";
import arithmetics from "../services/arithmetics.js";
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
      <Header />
      <main className="App__main">
        <Form firstNumber={firstNumber} secondNumber={secondNumber} />
        <div className="main__wrapper">
          <Button calculation={arithmetics.addition} sign="+" />
          <Button calculation={arithmetics.difference} sign="-" />
          <Button calculation={arithmetics.multiply} sign="x" />
          <Button calculation={arithmetics.divide} sign="/" />
        </div>
        <Output result={result} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
