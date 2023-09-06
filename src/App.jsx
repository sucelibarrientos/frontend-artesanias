import { Route, Routes } from "react-router-dom";
import Inicio from "./views/Inicio";
import Catalogo from "./views/Catalogo";
import Contacto from "./views/Contacto";
import Nosotros from "./views/Nosotros";
import NotFound from "./views/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
