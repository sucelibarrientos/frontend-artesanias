import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navegacion() {
  return (
    <div className={classes.Container}>
      <div className={classes.Links}>
        <Link className={classes.Link} to="/">Inicio</Link>
        <Link className={classes.Link} to="/catalogo">Catalogo</Link>
        <Link className={classes.Link} to="/contacto">Contacto</Link>
        <Link className={classes.Link} to="/nosotros">Nosotros</Link>
      </div>
    </div>
  );
}
export default Navegacion;
