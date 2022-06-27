import { Link, Route, Routes } from "react-router-dom";

const ConceptosBasicos = () => {
  const Contacto = () => {
    return <h3>Contacto</h3>;
  };

  return (
    <div>
      <h2>Conceptos Basicos</h2>
      <h2>Conceptos Basico</h2>
      <h2>Conceptos Basico3</h2>

      <Routes>
        <Route path="/" element={<h2>Home</h2>}></Route>
        <Route path="/acerca" element={<h3>Acerca</h3>} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
};

export default ConceptosBasicos;
