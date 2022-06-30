import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

const ComponentsOptions = () => {
  let { url, path } = useRouteMatch();

  const Clase = () => {
    return (
      <div>
        <h3>Componente de Clase</h3>
        <p>Clase calsro que sasa</p>
      </div>
    );
  };

  const Funcional = () => {
    return (
      <div>
        <h3>Componente Funcional</h3>
        <p> aa Funciona</p>
      </div>
    );
  };

  return (
    <div>
      <h3>Tipo de Componentes</h3>
      <ol>
        <li>
          <Link to={`${url}/funcional`}>Funcional</Link>
        </li>
        <li>
          <Link to={`${url}/clase`}>Clase</Link>
        </li>
      </ol>
      <Switch>
        <Route exact path={`${path}/clase`} component={Clase} />
        <Route exact path={`${path}/funcional`} component={Funcional} />
      </Switch>
    </div>
  );
};

export default ComponentsOptions;
