import "./Homepage.css";

import Hero from "../../components/Homepage/Hero/Hero";
import ContinueWatching from "../../components/Homepage/ContinueWatchingSection/ContinueWatching/ContinueWatching";
import MovieCollections from "../../components/Homepage/MovieCollectionsSection/MovieCollections/MovieCollections";

import {
  continueWatching,
  trendingMovies,
  movieCollections,
} from "../../data/data";

function Homepage() {
  return (
    <main className="homepage">
      <Hero />

      <ContinueWatching movies={continueWatching} />

      <MovieCollections
        trendingMovies={trendingMovies}
        movieCollections={movieCollections}
      />
    </main>
  );
}

export default Homepage;
