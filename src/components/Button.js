function Button(props) {
  const handleClick = (ev) => {
    ev.preventDefault();
    const total = props.firstNumber + props.secondNumber;
    return total;
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
