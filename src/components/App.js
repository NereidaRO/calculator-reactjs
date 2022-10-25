import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/layout/App.scss";
import Header from "./Header.js";
import Form from "./Form.js";
import Button from "./Button.js";
import Output from "./Output.js";
import Footer from "./Footer";

function App() {
  //states
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [result, setResult] = useState(0);

  //lifting
  const handleValueOne = (inputValueOne) => {
    setFirstNumber(parseInt(inputValueOne));
  };
  const handleValueTwo = (inputValueTwo) => {
    setSecondNumber(parseInt(inputValueTwo));
  };
  const handleResult = (userResult) => {
    setResult(userResult);
  };

  //note for baby-juniors: the lifting returned an string

  //calculations
  const addition = (a, b) => {
    return a + b;
  };

  const difference = (a, b) => {
    return a - b;
  };

  const multiplication = (a, b) => {
    return a * b;
  };

  const division = (a, b) => {
    return a / b;
  };

  //render
  return (
    <div className="App">
      {" "}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main className="App__main">
                <Output result={result} />
                <Form
                  firstNumber={firstNumber}
                  secondNumber={secondNumber}
                  handleValueOne={handleValueOne}
                  handleValueTwo={handleValueTwo}
                />
                <div className="main__wrapper--bt">
                  <Button
                    calculation={addition}
                    sign="+"
                    firstNumber={firstNumber}
                    secondNumber={secondNumber}
                    handleResult={handleResult}
                  />

                  <Button
                    calculation={difference}
                    sign="-"
                    firstNumber={firstNumber}
                    secondNumber={secondNumber}
                    handleResult={handleResult}
                  />
                  <Button
                    calculation={multiplication}
                    sign="x"
                    firstNumber={firstNumber}
                    secondNumber={secondNumber}
                    handleResult={handleResult}
                  />
                  <Button
                    calculation={division}
                    sign="/"
                    firstNumber={firstNumber}
                    secondNumber={secondNumber}
                    handleResult={handleResult}
                  />
                </div>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
