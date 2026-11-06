import { Play } from "lucide-react";
import "./ContinueWatchingCard.css";

function ContinueWatchingCard({ movie }) {
  return (
    <article className="continue-card">
      <div className="continue-card-image">
        <img src={movie.image} alt={movie.title} loading="lazy" />

        <button
          type="button"
          className="continue-play-button"
          aria-label={`Continue watching ${movie.title}`}
        >
          <Play size={22} fill="currentColor" />
        </button>
      </div>

      <div className="continue-card-info">
        <h3>{movie.title}</h3>
        <p>{movie.episode}</p>

        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: movie.progress }}
          />
        </div>
      </div>
    </article>
  );
}

export default ContinueWatchingCard;
