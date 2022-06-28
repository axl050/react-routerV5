import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Contacto from "../pages/Contacto";
import Acerca from "../pages/Acerca";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import MenuConceptos from "../components/MenuConceptos";
import Usuario from "../pages/Usuario";
import Productos from "../pages/Productos";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Basicos</h2>

      <BrowserRouter>
        <MenuConceptos />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/usuario/:userName" component={Usuario} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/about">
            <Redirect to="/acerca" />
          </Route>
          <Route exact path="/contact">
            <Redirect to="contacto" />
          </Route>
          <Route exact path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default ConceptosBasicos;
// const ConceptosBasicos = () => {
//   return (
//     <div>
//       <h2>Conceptos Basicos</h2>
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/">
//             <h2>Home</h2>
//           </Route>
//           <Route axact path="/contacto">
//             <Contacto />
//           </Route>
//           {/* <Route exact path="/acerca" component={Acerca} /> */}
//           {/* <Route exact path="/acerca" children={Acerca} /> */}
//           {/* <Route exact path="/acerca" children={<Acerca />} /> */}
//           <Route
//             exact
//             path="/acerca"
//             children={
//               <>
//                 <Acerca />
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Itaque fugit reprehenderit, necessitatibus accusantium
//                   repellendus eumt sapiente mollitia corrupti voluptatum
//                   ullam.inventore fugit voluptas velit reprehenderit? Similique,
//                   doloremque rerum{" "}
//                 </p>
//               </>
//             }
//           />
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// };
