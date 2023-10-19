import Movie from "./MovieList";
import FilmCard from "./FilmCard";
import React, { useState } from "react";
import Film from "./AddFilm";
import { Link } from "react-router-dom";
const ListeDeFilms = () => {
  const [item, setItems] = useState(Movie);
  const [nouveauFilm, setNouveauFilm] = useState(Film);
  const [show, setShow] = useState(false);
  {
    /*partie pour l'ajout des film*/
  }
  const handleAddFilm = (e) => {
    e.preventDefault();
    setItems([...item, { ...nouveauFilm }]);
    setNouveauFilm({ titre: "", note: "", poste: "" });
  };
  {
    /*partie pour l'ajout des film pour la soumission*/
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNouveauFilm({ ...nouveauFilm, [name]: value });
  };
  {
    /*partie pour le filtrage par titre ou par note*/
  }
  const name = (e) => {
    const search = e.target.value.toLowerCase();
    const filtered1 = Movie.filter((descr) => {
      const filteredname = descr.titre.toLocaleLowerCase().includes(search);
      const filterednote = descr.note.toString().toLowerCase().includes(search);
      return filteredname || filterednote;
    });
    setItems(filtered1);
  };
  return (
    <>
      {/*la barre de recherche*/}
      <div>
        <div class="mb-3 w-[50%] flex flex-row justify-center">
          <div class="mb-6">
            <input
              type="search"
              placeholder="SEARCH BY TITLE OR RATING"
              onChange={function (e) {
                name(e);
              }}
              id="large-input"
              class="block w-auto p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      {/*partie pour maper les composant de movielist*/}
      <div className="trailler">
        <div className="liste-de-films grid grid-cols-3 gap-x-[1%] gap-y-8 ml-[auto] ">
          {item.map((descr) => (
            <div key={descr.id}>
              {/*lien qui permet de regarder le trailer du film*/}
              <Link to={`descr/${descr.id}`}>
                <FilmCard {...descr} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/*formulaire pour l'ajout des film*/}
      <div>
        <div className="bas">
          <form
            onSubmit={handleAddFilm}
            className="flex flex-row justify-evenly"
          >
            <div class="mb-6">
              <label
                for="large-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name Movie
              </label>
              <input
                type="text"
                name="titre"
                placeholder="Title"
                value={nouveauFilm.titre}
                onChange={handleInputChange}
                id="large-input"
                class="block w-auto p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mb-6">
              <label
                for="base-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Rating
              </label>
              <input
                type="text"
                name="note"
                placeholder="Note"
                value={nouveauFilm.note}
                onChange={handleInputChange}
                id="base-input"
                class="bg-gray-50 border p-2 w-auto border-gray-300 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            {/* Ajouter l'URL de l'image */}
            <div className="mb-6">
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Url Image
              </label>
              <input
                type="text"
                name="poste"
                placeholder="URL de l'image"
                value={nouveauFilm.poste}
                onChange={handleInputChange}
                id="small-input"
                class="block w-auto p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="bg-stone-400 rounded-lg w-[10%] h-[10%] p-2 mt-6">
              <button className="submit">Ajouter un Film</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ListeDeFilms;
