import { Play, Plus, ChevronDown } from "lucide-react";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const genres = movie.genres || [movie.category];

  return (
    <article className="movie-card">
      <div className="movie-card-preview">
        {/* Movie Image */}
        <div className="movie-card-image">
          <img
            src={movie.backdrop || movie.image}
            alt={movie.title}
            loading="lazy"
          />
        </div>

        {/* Movie Actions */}
        <div className="movie-card-actions">
          <button
            type="button"
            className="movie-card-play"
            aria-label={`Play ${movie.title}`}
          >
            <Play size={18} fill="currentColor" />
          </button>

          <button
            type="button"
            className="movie-card-add"
            aria-label={`Add ${movie.title} to my list`}
          >
            <Plus size={18} />
          </button>

          <button
            type="button"
            className="movie-card-more"
            aria-label={`More information about ${movie.title}`}
          >
            <ChevronDown size={20} />
          </button>
        </div>

        {/* Movie Information */}
        <div className="movie-card-info">
          <h3>{movie.title}</h3>

          <div className="movie-card-meta">
            <span className="movie-card-age">{movie.age || "13+"}</span>

            <span>{movie.duration || movie.year}</span>
          </div>

          <div className="movie-card-genres">
            {genres.filter(Boolean).map((genre, index) => (
              <span className="movie-card-genre" key={genre}>
                {index > 0 && <span className="genre-dot">•</span>}
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;
