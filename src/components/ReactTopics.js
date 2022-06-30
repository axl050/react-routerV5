import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import ComponentsOptions from "./ComponentsOptions";

// const Topic = () => {
//   let { topic } = useParams();
//   console.log(useParams().topic);

//   return (
//     <div>
//       <h4>{topic}</h4>
//       <p>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
//         cupiditate minus maiores at alias, vero provident praesentium nisi
//         laborum aspernatur expedita inventore natus eaque delectus optio tempore
//         cum dolor iure.
//       </p>
//     </div>
//   );
// };

const Topic = () => {
  let { topic } = useParams();
  console.log(useParams().topic);

  if (topic === "components") {
    return <ComponentsOptions />;
  } else {
    return (
      <div>
        <h4>{topic}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
          cupiditate minus maiores at alias, vero provident praesentium nisi
          laborum aspernatur expedita inventore natus eaque delectus optio
          tempore cum dolor iure.
        </p>
      </div>
    );
  }
};

// console.log(topic);
// topic === "components" ? (
//   <ComponentsOptions />
// ) :

const ReactTipics = () => {
  // let match= useRouteMatch()
  // console.log(Math)
  // "path" nos permite construir rutas relativas <Route>, mientras que "url" nos permite construir enlaces relativos <Link> o <NavLink>
  // "PATH" => <Link><NavLink>

  /* "URL" => <ROUTE> */

  let { url, path } = useRouteMatch();

  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elije un tema de React</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            labore accusantium? Magni rem hic dolore unde ipsa corrupti numquam
            voluptate eum voluptatum at, quam expedita animi accusamus! Impedit,
            dolores illo.
          </p>
        </Route>

        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTipics;
