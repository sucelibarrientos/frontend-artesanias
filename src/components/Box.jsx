function Box({ image }) {
  return (
    <div className="box">
      <img className="miniatura" src={`./images/${image}`} alt="imagen" />
      <button className="btn">Ver detalles</button>
      <p className="title">Pulseras Modelo Pepito</p>
    </div>
  );
}

export default Box;
