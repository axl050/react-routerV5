import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Enlaces HTML (no recomendado, recarga la pagina): </span>
          <a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <span>Componente Link: </span>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
          {/* <Link to="/no-existe">Error404</Link> */}
        </li>
        <li>
          <span>Navlink (activeClassName)</span>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink exact to="/acerca" activeClassName="active">
            Acerca
          </NavLink>
          <NavLink exact to="/contacto" activeClassName="active">
            Contacto
          </NavLink>
          <NavLink to="*" activeClassName="active">
            Error404
          </NavLink>
        </li>
        <li>
          <span>Parametros : </span>
          <Link to="/usuario/axel">axel</Link>
          <Link to="/usuario/david">david</Link>
        </li>
        <li>
          <span>Pametros de consulta: </span>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <span>Redirecciones: </span>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
