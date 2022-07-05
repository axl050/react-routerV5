import "./App.css";
import ConceptosBasicos from "./components/ConceptosBasicos";
// import CrudTable from "./components/CrudTable";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <a
        href="https://v5.reactrouter.com/web/guides/quick-start "
        target="_blank"
        rel="noreferrer"
      >
        Documentacion
      </a>
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <ConceptosBasicos />
    </div>
  );
}

export default App;
