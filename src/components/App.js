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
      <header className="App__header">
        <Header />
      </header>
      <main className="App__main">
        <Form firstNumber={firstNumber} secondNumber={secondNumber} />
        <div className="main__wrapper">
          <Button sign="+" />
          <Button sign="-" />
          <Button sign="x" />
          <Button sign="/" />
          <Button sign="sq" />
        </div>
        <Output result={result} />
      </main>
      <footer className="App__footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
