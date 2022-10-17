import "../styles/layout/Output.scss";

function Output(props) {
  return (
    <div className="Output">
      <h1 className="Output__title">Calculator!</h1>
      <p className="Output__paragraph">{props.result}</p>
    </div>
  );
}

export default Output;
