import "./App.css";
import ListeDeFilms from "./components/Filter";
import { Route, Routes } from "react-router-dom";
import DetailsFilm from "./components/DetailsFilm";
function App() {
  return (
    <>
      <div className="App"></div>
      {/*pour la navigation entre chaque page du site*/}
      <Routes>
        {/*naviger a l'acceuil du page*/}
        <Route path="/" element={<ListeDeFilms />} />
        {/* naviger au details de film */}
        <Route path="/descr/:id" element={<DetailsFilm />} />
      </Routes>
    </>
  );
}

export default App;
