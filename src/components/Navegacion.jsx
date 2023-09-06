import { Link } from "react-router-dom";

function Navegacion() {
  return (
    <div className="navbar">
      <div className="links">
        <Link className="link" to="/">Inicio</Link>
        <Link className="link" to="/catalogo">Catalogo</Link>
        <Link className="link" to="/contacto">Contacto</Link>
        <Link className="link" to="/nosotros">Nosotros</Link>
      </div>
    </div>
  );
}
export default Navegacion;
