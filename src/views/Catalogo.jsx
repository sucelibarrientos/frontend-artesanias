import Navegacion from "./../components/Navegacion";
import Box from "../components/Box";
import config from './../config/config';
import { useEffect } from "react";


function Catalogo() {
  useEffect(() => {
    document.title = config.title.catalogo;
  }, []);
  return (
    <div className="container">
      <Navegacion />
      <h1>Catalogo</h1>
      <div className="catalogo">
      <Box image="image-1.png"/>
        <Box image="image-2.png" />
        <Box image="image-3.png" />
        <Box image="image-4.png" />
        <Box image="image-5.png" />
        <Box image="image-6.png" />
        <Box image="image-1.png" />
        <Box image="image-2.png" />
        <Box image="image-3.png" />
      </div>
    </div>
  );
}

export default Catalogo;
