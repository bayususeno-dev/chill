import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./Footer.css";

function Footer() {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <footer className="footer body-large-medium">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/assets/navbar/brand/Vector.svg" alt="" />
            <img src="/assets/navbar/brand/CHILL.svg" alt="CHILL" />
          </Link>

          <p>© 2026 CHILL. All rights reserved.</p>
        </div>

        {/* Genre */}
        <div className="footer-links">
          <button
            type="button"
            className="footer-links-toggle"
            onClick={() => setIsGenreOpen((prev) => !prev)}
            aria-expanded={isGenreOpen}
            aria-controls="footer-genres"
          >
            Genre
            <span className="footer-chevron">
              {isGenreOpen ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </span>
          </button>

          <div
            className={`footer-links-content footer-link-grid ${
              isGenreOpen ? "is-open" : ""
            }`}
            id="footer-genres"
          >
            <Link to="/genre/action">Aksi</Link>
            <Link to="/genre/drama">Drama</Link>
            <Link to="/genre/anak">Anak-anak</Link>
            <Link to="/genre/comedy">Komedi</Link>
            <Link to="/genre/horror">Horror</Link>
            <Link to="/genre/romance">Romantis</Link>
            <Link to="/genre/scifi">Sci-Fi</Link>
            <Link to="/genre/crime">Kejahatan</Link>
            <Link to="/genre/fantasy">Fantasi</Link>
            <Link to="/genre/musical">Musikal</Link>
            <Link to="/genre/thriller">Thriller</Link>
          </div>
        </div>

        {/* Help */}
        <div className="footer-links">
          <button
            type="button"
            className="footer-links-toggle"
            onClick={() => setIsHelpOpen((prev) => !prev)}
            aria-expanded={isHelpOpen}
            aria-controls="footer-help"
          >
            Bantuan
            <span className="footer-chevron">
              {isHelpOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>

          <div
            className={`footer-links-content footer-help-links ${
              isHelpOpen ? "is-open" : ""
            }`}
            id="footer-help"
          >
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Kontak Kami</Link>
            <Link to="/privacy">Privasi</Link>
            <Link to="/terms">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
