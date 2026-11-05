/* =========================
   MOVIE DATA
========================= */

const continueWatching = [
  {
    id: 1,
    title: "Don't Look Up",
    image: "/assets/movies/Frame.svg",
    episode: "S1 Episode 3",
    progress: "65%",
  },
  {
    id: 2,
    title: "All of Us Are Dead",
    image: "/assets/movies/Frame.svg",
    episode: "S1 Episode 2",
    progress: "35%",
  },
  {
    id: 3,
    title: "The Witcher",
    image: "/assets/movies/Frame.svg",
    episode: "S2 Episode 5",
    progress: "80%",
  },
];

const trendingMovies = [
  {
    id: 1,
    title: "The Batman",
    image: "/assets/movies/image.svg",
    backdrop: "/assets/movies/image.svg",
    rating: "4.8",
    year: "2022",
    duration: "2j 56m",
    age: "13+",
    category: "Action",
    genres: ["Action", "Crime", "Drama"],
  },
  {
    id: 2,
    title: "Suzume",
    image: "/assets/movies/image.svg",
    backdrop: "/assets/movies/image.svg",
    rating: "4.9",
    year: "2022",
    duration: "2j 2m",
    age: "13+",
    category: "Animation",
    genres: ["Animation", "Fantasy"],
  },
  {
    id: 3,
    title: "Blue Lock",
    image: "/assets/movies/image.svg",
    backdrop: "/assets/movies/image.svg",
    rating: "4.7",
    year: "2023",
    duration: "24m",
    age: "13+",
    category: "Anime",
    genres: ["Anime", "Sport"],
  },
  {
    id: 4,
    title: "A Man Called Otto",
    image: "/assets/movies/image1.svg",
    backdrop: "/assets/movies/image1.svg",
    rating: "4.6",
    year: "2022",
    duration: "2j 6m",
    age: "13+",
    category: "Drama",
    genres: ["Drama", "Komedi", "Romantis"],
  },
  {
    id: 5,
    title: "The Tomorrow War",
    image: "/assets/movies/image1.svg",
    backdrop: "/assets/movies/image1.svg",
    rating: "4.7",
    year: "2021",
    duration: "2j 18m",
    age: "13+",
    category: "Sci-Fi",
    genres: ["Action", "Sci-Fi"],
  },
];

export const newReleases = [
  {
    id: 101,
    title: "Tomorrow Land",
    image: "/assets/movies/image1.svg",
    backdrop: "/assets/movies/image1.svg",
    age: "13+",
    year: "2026",
    genres: ["Action", "Drama"],
  },

  {
    id: 102,
    title: "Final Destination",
    image: "/assets/movies/image1.svg",
    backdrop: "/assets/movies/image1.svg",
    age: "17+",
    year: "2026",
    genres: ["Thriller", "Mystery"],
  },
  {
    id: 103,
    title: "Final Destination",
    image: "/assets/movies/image1.svg",
    backdrop: "/assets/movies/image1.svg",
    age: "17+",
    year: "2026",
    genres: ["Thriller", "Mystery"],
  },
  {
    id: 104,
    title: "Final Destination",
    image: "/assets/movies/image1.svg",
    backdrop: "/assets/movies/image1.svg",
    age: "17+",
    year: "2026",
    genres: ["Thriller", "Mystery"],
  },
  {
    id: 105,
    title: "Tomorrow Land",
    image: "/assets/movies/image1.svg",
    backdrop: "/assets/movies/image1.svg",
    age: "13+",
    year: "2026",
    genres: ["Action", "Drama"],
  },
];

const movieCollections = [
  {
    id: 1,
    title: "Film Trending",
    movies: trendingMovies,
  },
  {
    id: 2,
    title: "Rilis Baru",
    movies: newReleases,
  },
];

export { continueWatching, trendingMovies, movieCollections };
