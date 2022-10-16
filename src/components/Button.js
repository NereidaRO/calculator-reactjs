import "../styles/layout/Button.scss";

function Button(props) {
  const handleClick = (ev) => {
    ev.preventDefault();
    const a = props.firstNumber;
    const b = props.secondNumber;
    const userResult = props.calculation(a, b);
    props.handleResult(userResult);
  };

  return (
    <div className="Button">
      <button className="Button__button" onClick={handleClick}>
        {props.sign}
      </button>
    </div>
  );
}

export default Button;
