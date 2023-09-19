import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import config from './../config/config';

function Nosotros() {
  useEffect(() => {
    document.title = config.title.nosotros;
  }, []);
  return (
    <div>
      <Navbar />
      <h1>Nosotros</h1>
    </div>
  );
}

export default Nosotros;
