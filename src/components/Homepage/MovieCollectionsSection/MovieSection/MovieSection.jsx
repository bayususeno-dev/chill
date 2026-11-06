import { ChevronRight } from "lucide-react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieSection.css";

function MovieSection({ title, movies, id }) {
  return (
    <section className="movie-section" id={id}>
      <div className="movie-section-header">
        <h2>{title}</h2>

        <button type="button" className="movie-section-more">
          Lihat Semua
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MovieSection;
