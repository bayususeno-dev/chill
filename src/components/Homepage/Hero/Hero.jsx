import { useState } from "react";
import { Link } from "react-router-dom";
import { Info, Volume2, VolumeX } from "lucide-react";
import "./Hero.css";

function Hero() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section
      className="hero-banner"
      style={{
        backgroundImage: `
        linear-gradient(
        to top,
        var(--pageheader-other-bg) 0%,
        rgba(24, 26, 28, 0.85) 20%,
        transparent 65%
        ),
        linear-gradient(
        90deg,
        rgba(24, 26, 28, 0.95) 0%,
        rgba(24, 26, 28, 0.65) 45%,
        rgba(24, 26, 28, 0.1) 100%
        ),
        url("/assets/movies/Frame.svg")
        `,
      }}
    >
      <div className="hero-content">
        <h1>Duty After School</h1>

        <div className="hero-meta">
          <span>2023</span>
          <span>Action</span>
          <span>1 Season</span>
          <span>16+</span>
        </div>

        <p>
          Ketika makhluk asing mengancam kehidupan manusia, para siswa harus
          bersatu dan berjuang untuk bertahan hidup.
        </p>

        <div className="hero-actions">
          <Link
            to="/login"
            className="button-primary-contained hero-button-primary"
          >
            Mulai
          </Link>

          <button
            type="button"
            className="button-primary-shadow hero-button-secondary"
          >
            <Info size={18} />
            Selengkapnya
          </button>

          <button
            type="button"
            className="hero-button-age"
            aria-label="Age rating 16 plus"
          >
            16+
          </button>
        </div>
      </div>

      {/* Sound Toggle */}
      <button
        type="button"
        className="hero-sound-toggle"
        onClick={() => setIsMuted((prev) => !prev)}
        aria-label={isMuted ? "Aktifkan suara" : "Matikan suara"}
        aria-pressed={!isMuted}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </section>
  );
}

export default Hero;
