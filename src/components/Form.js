import "../styles/layout/Form.scss";

function Form(props) {
  //events
  const handleValueOne = (ev) => {
    const inputValue = ev.target.value;
    props.handleValueOne(inputValue);
  };

  const handleValueTwo = (ev) => {
    const inputValue = ev.target.value;
    props.handleValueTwo(inputValue);
  };

  //render
  return (
    <form className="Form">
      <input
        className="Form__input"
        type="number"
        name="first"
        id="first"
        placeholder="Insert your first number"
        value={props.firstNumber}
        onChange={handleValueOne}
      />
      <input
        className="Form__input"
        type="number"
        name="second"
        id="second"
        placeholder="Insert your second number"
        value={props.secondNumber}
        onChange={handleValueTwo}
      />
    </form>
  );
}

export default Form;
