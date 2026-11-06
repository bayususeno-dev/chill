import { ChevronRight } from "lucide-react";
import ContinueWatchingCard from "../ContinueWatchingCard/ContinueWatchingCard";
import "./ContinueWatching.css";

function ContinueWatching({ movies }) {
  return (
    <section className="continue-section" id="my-list">
      <div className="continue-section-header">
        <h2>Melanjutkan Nonton Film</h2>

        <button type="button" className="continue-section-more">
          Lihat Semua
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="continue-grid">
        {movies.map((movie) => (
          <ContinueWatchingCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default ContinueWatching;
