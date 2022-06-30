import { Redirect, Route } from "react-router-dom";

// const PrivateRoute = (props) => {
//   return <Route exact={props.exact} path={props.path} component={props.component} />
// };

// const PrivateRoute = (props) => {
//   return <Route {...props} />
// };

// SImular Auntenticacion
let auth;
auth = null;
auth = true;
//  component:Component => se le da el alias para que el componente empieze con mayuiscula y se detecte como un componente
const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest}>{auth ? Component : <Redirect to="/login" />}</Route>;
};

export default PrivateRoute;
