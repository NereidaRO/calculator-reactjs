//En este componente se importa el servicio funciones

function Button(props) {
  return (
    <div className="Button">
      <button className="Button__button">{props.sign}</button>
    </div>
  );
}

export default Button;
