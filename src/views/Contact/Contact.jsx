import Navbar from "../../components/Navbar/Navbar";
import classes from "./Contact.module.css";
import { useEffect } from "react";
import config from "./../../config/config";

function Contacto() {
  useEffect(() => {
    document.title = config.title.contacto;
  }, []);
  return (
    <div className={classes.Container}>
      <Navbar />
      <form className={classes.Form}>
        <h1 className={classes.Title}>Envia tu informaicon para que nos cominiquemos contigo</h1>
        <div className={classes.Inputs}>
          <label>Nombre</label>
          <input type="text" />
          <label>Apellido</label>
          <input type="text" />
          <label>Correo</label>
          <input type="email" />
          <label>Mensaje</label>
          <textarea></textarea>
        </div>
        <button className={classes.Button}>Enviar</button>
        <div className={classes.Portada}>
          <img src="/images/contact.png" alt="contacto" />
        </div>
      </form>
      <div></div>
    </div>
  );
}

export default Contacto;
