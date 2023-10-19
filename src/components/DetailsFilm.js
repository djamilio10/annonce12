import React from "react";
import Movie from "./MovieList";
import { Link, useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";
function DetailsFilm() {
  const { id } = useParams();
  {
    /*utilisation de useparams pour pouvoir recuperer l'id de chaque film*/
  }
  const descr = Movie.find((m) => m.id === id);
  {
    /*utilasation de la methode find pour pouvoir trouver l'id de chaque film*/
  }
  return (
    <>
      {/*utilisation du link de react router pour pouvoir retourner a l'acceuil*/}
      <div className="ho">
        <Link to="/">
          <a
            href=""
            class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg--600 opacity-50 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="">
              <svg
                class="w-5 h-5 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative flex items-center">
              {" "}
              <FaHome class="mr-2" /> Home{" "}
            </span>
          </a>
        </Link>
        {/*affichage du trailer et du description pour les films*/}
      </div>
      <div className="flex flex-col items-center  ">
        <h1 className="voulou2">TRAILLER</h1>
        <iframe
          className="rounded"
          width="550"
          height="300"
          src={descr.trailler}
          title={descr.titre}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h1 className="voulou">Description:</h1>
        <h2 className="fontu">{descr.description}</h2>
      </div>
    </>
  );
}

export default DetailsFilm;
