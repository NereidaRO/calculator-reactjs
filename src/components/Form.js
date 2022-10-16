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
      <label className="Form__label" for="first">
        Insert your first number:
      </label>
      <input
        className="Form__input"
        type="number"
        name="first"
        id="first"
        value={props.firstNumber}
        onChange={handleValueOne}
      />
      <label className="Form__label" for="second">
        Insert your second number:
      </label>
      <input
        className="Form__input"
        type="number"
        name="second"
        id="second"
        value={props.secondNumber}
        onChange={handleValueTwo}
      />
    </form>
  );
}

export default Form;
