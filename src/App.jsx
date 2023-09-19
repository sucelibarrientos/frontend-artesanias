import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import Nosotros from "./views/Nosotros";
import NotFound from "./views/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<p>catalogo</p>} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
