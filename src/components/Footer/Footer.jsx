import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer body-large-medium">
      <div className="footer-container ">
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
          <h4>Genre</h4>
          <div className="footer-link-grid">
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
          <h4>Bantuan</h4>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Kontak Kami</Link>
          <Link to="/privacy">Privasi</Link>
          <Link to="/terms">Syarat & Ketentuan</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
