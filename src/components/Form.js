function Form(props) {
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
      />
    </form>
  );
}

export default Form;
