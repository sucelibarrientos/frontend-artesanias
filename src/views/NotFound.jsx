import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Pagina No Encontrada</h1>
      <button onClick={handleClick}>Volver al inicio</button>
    </div>
  );
}

export default NotFound;
