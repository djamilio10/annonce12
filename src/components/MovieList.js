const Movie = [
  {
    titre: "The Amazing Spider-Man : le destin d'un Héros (2014)",
    description:
      "Ce n’est un secret pour personne que le combat le plus rude de Spider-Man est celui qu’il mène contre lui-même en tentant de concilier la vie quotidienne de Peter Parker et les lourdes responsabilités de Spider-Man. Mais Peter Parker va se rendre compte qu’il fait face à un conflit de bien plus grande ampleur. Être Spider-Man, quoi de plus grisant ? Peter Parker trouve son bonheur entre sa vie de héros, bondissant d’un gratte-ciel à l’autre, et les doux moments passés aux côté de Gwen. Mais être Spider-Man a un prix : il est le seul à pouvoir protéger ses concitoyens new-yorkais des abominables méchants qui menacent la ville. Face à Electro, Peter devra affronter un ennemi nettement plus puissant que lui. Au retour de son vieil ami Harry Osborn, il se rend compte que tous ses ennemis ont un point commun : OsCorp.",
    poste:
      "https://img.freepik.com/photos-premium/costume-araignee-pour-homme-portant-costume-metal_839976-2995.jpg?size=626&ext=jpg&ga=GA1.1.898960204.1697549542&semt=sph",
    note: 5,
    id: "1",
    trailler: "https://www.youtube.com/embed/G1Na0rKWY74",
  },
  {
    titre: "Warcraft : Le commencement (2016)",
    description:
      "Le pacifique royaume d'Azeroth est au bord de la guerre alors que sa civilisation doit faire face à une redoutable race d’envahisseurs: des guerriers Orcs fuyant leur monde moribond pour en coloniser un autre. Alors qu’un portail s’ouvre pour connecter les deux mondes, une armée fait face à la destruction et l'autre à l'extinction. De côtés opposés, deux héros vont s’affronter et décider du sort de leur famille, de leur peuple et de leur patrie.",
    poste:
      "https://img.freepik.com/photos-gratuite/guerriers-vikings-aux-yeux-brulants-ai-generative_8829-2911.jpg?size=626&ext=jpg&ga=GA1.1.898960204.1697549542&semt=sph",
    note: 4,
    id: "2",
    trailler: "https://www.youtube.com/embed/d7THxrD72eE?si=xsxF64pKbtLURqT8",
  },
  {
    titre: "Renfield (2023)",
    description: `Le mal ne saurait survivre une éternité sans un petit coup de pouce.  Dans cette version moderne du mythe de Dracula, Renfield est l’assistant torturé du maître le plus narcissique qui ait jamais existé : Dracula. Renfield est contraint par son maître de lui procurer des proies et de pourvoir à toutes ses requêtes, mêmes les plus dégradantes. Mais après des siècles de servitude, il est enfin prêt à s’affranchir de l’ombre du Prince des ténèbres. À la seule condition qu’il arrive à mettre un terme à la dépendance mutuelle qui les unit.`,
    poste:
      "https://re.french-stream.gg/red.php?src=https://image.tmdb.org/t/p/w300/jG83l0tDwoQj3hBAioIsJ5rTPHw.jpg&.webp",
    note: 4,
    id: "3",
    trailler: "https://www.youtube.com/embed/ZPyj1D046zw?si=oonKmdjNIORBqlCd",
  },
  {
    titre: "Tyler Rake 2 (2023)",
    description: `Après avoir miraculeusement survécu aux événements du premier volet, le mercenaire australien des forces spéciales Tyler Rake est de retour pour une nouvelle mission périlleuse : extraire de prison la famille martyrisée d'un impitoyable gangster géorgien. `,
    poste:
      "https://re.french-stream.gg/red.php?src=https://image.tmdb.org/t/p/w300/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg&.webp",
    note: 5,
    id: "4",
    trailler: "https://www.youtube.com/embed/Lc2mwVUuGn8?si=9gDqYRAdkB2ru2Pz",
  },
  {
    titre: "La Petite Sirène (2023)",
    description: `La plus jeune des filles du roi Triton, Ariel, est une jeune sirène belle et fougueuse avec une soif d'aventure. Désireuse d'en savoir plus sur le monde au-delà de la mer, Ariel visite la surface et tombe amoureuse du Prince Eric. Suivant son cœur, elle conclut un accord avec la méchante sorcière de la mer, Ursula, pour découvrir la vie sur terre.`,
    poste:
      "https://re.french-stream.gg/red.php?src=https://image.tmdb.org/t/p/w300/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg&.webp",
    note: 1,
    id: "5",
    trailler: "https://www.youtube.com/embed/J5VvzJmiqJc?si=UHR9r7wJVwCA_2cW",
  },
  {
    titre: "Alibi.com 2 (2023)",
    description: `Après avoir fermé son agence Alibi.com et promis à Flo qu'il ne lui mentirait plus jamais, la nouvelle vie de Greg est devenue tranquille, trop tranquille... Plus pour longtemps ! Lorsqu’il décide de demander Flo en mariage, Greg est au pied du mur et doit se résoudre à présenter sa famille. Mais entre son père escroc et sa mère ex-actrice de films de charme, ça risque fort de ruiner sa future union. Il n'a donc pas d'autre choix que de réouvrir son agence avec ses anciens complices pour un ultime Alibi et de se trouver des faux parents plus présentables.`,
    poste:
      "https://re.french-stream.gg/red.php?src=https://image.tmdb.org/t/p/w300/9gteYoeW0wOvYHnnvXJpq0RiGV8.jpg&.webp",
    note: 3,
    id: "6",
    trailler: "https://www.youtube.com/embed/LXUESg1xI-M?si=NgJ1pHXN0KNOvu3z",
  },
  {
    titre: "Fast & Furious X (2023)",
    description: `Après bien des missions et contre toute attente, Dom Toretto et sa famille ont su déjouer, devancer, surpasser et distancer tous les adversaires qui ont croisé leur route. Ils sont aujourd’hui face à leur ennemi le plus terrifiant et le plus intime : émergeant des brumes du passé, ce revenant assoiffé de vengeance est bien déterminé à décimer la famille en réduisant à néant tout ce à quoi, et surtout à qui Dom ait jamais tenu.`,
    poste:
      "https://re.french-stream.gg/red.php?src=https://image.tmdb.org/t/p/w300/fiVW06jE7z9YnO4trhaMEdclSiC.jpg&.webp",
    note: 5,
    id: "7",
    trailler: "https://www.youtube.com/embed/-WjVobqh-oU?si=LBIDF5aRJ7Lpo9jA",
  },
  {
    titre: "Blue Beetle (2023)",
    description: `Fraîchement diplômé de l’université, Jaime Reyes rentre chez lui, plein d’ambitions, mais il découvre que la situation a bien changé depuis son départ. Tandis qu’il cherche sa place dans le monde, le destin s’en mêle : Jaime se retrouve par hasard en possession du Scarabée, une ancienne relique d’une biotechnologie extraterrestre. Dès lors que le Scarabée choisit de faire de Jaime son hôte, le jeune homme se voit revêtu d’une armure hors du commun qui lui octroie des pouvoirs extraordinaires – et imprévisibles. Tout bascule alors pour Jaime qui devient le super-héros Blue Beetle …`,
    poste:
      "https://re.french-stream.gg/red.php?src=https://image.tmdb.org/t/p/w300/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg&.webp",
    note: 4,
    id: "8",
    trailler: "https://www.youtube.com/embed/-OOAZLZeZBc?si=dSU1v3ECQqPBecaA",
  },
  {
    titre: "La Nonne La Malédiction de Sainte-Lucie (2023)",
    description: `En France, en 1956, un prêtre est assassiné dans un internat. Après la mort du prêtre, il se passe des choses qui ne peuvent plus être expliquées rationnellement. Sœur Irène est une nouvelle fois confrontée à un pouvoir démoniaque. Elle se rend vite compte que c'est le démon Valak qui est de retour et qui se prépare à ses méfaits meurtriers.`,
    poste:
      "https://re.french-stream.gg/red.php?src=https://image.tmdb.org/t/p/w300/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg&.webp",
    note: 2,
    id: "9",
    trailler: "https://www.youtube.com/embed/TM80MlTfCcc?si=YEi8HofYThugPH37",
  },
];
export default Movie;
