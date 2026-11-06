import MovieSection from "../MovieSection/MovieSection";
import "./MovieCollections.css";

function MovieCollections({ trendingMovies, movieCollections }) {
  return (
    <div className="movie-collections">
      {/* Top Rating */}
      <MovieSection
        id="films"
        title="Top Rating Film dan Series Hari Ini"
        movies={trendingMovies}
      />

      {/* Movie Collections */}
      <div id="series">
        {movieCollections.map((collection) => (
          <MovieSection
            key={collection.id}
            title={collection.title}
            movies={collection.movies}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieCollections;
