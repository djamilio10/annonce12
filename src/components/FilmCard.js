import React from "react";
// definition des cartes du style et de la place de chaque partie
const FilmCard = ({ titre, description, poste, note }) => {
  return (
    <div class="relative flex w-[80%] ml-[70px] p-2 flex-col rounded-xl bg-black bg-clip-border text-white shadow-md cardoo">
      <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-black bg-clip-border text-white">
        <img src={poste} class="h-[100%] w-[100%]" />
      </div>
      <div class="p-6">
        <div class="mb-2 flex items-center justify-between">
          <h1 class="block font-sans text-base font-medium leading-relaxed text-white antialiased">
            Title: {titre}
          </h1>
        </div>
        <p
          className="des"
          class="block font-sans text-sm font-normal leading-normal text-white antialiased opacity-75"
        >
          {description}
        </p>
      </div>
      <p class="block font-sans text-base font-medium leading-relaxed text-white antialiased">
        Note: {note}
      </p>
    </div>
  );
};

export default FilmCard;
