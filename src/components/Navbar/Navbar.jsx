import { Link } from "react-router-dom";
import { UserRound, Star, LogOut, ChevronDown } from "lucide-react";
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <header className="navbar body-large-medium">
      <div className="navbar-container">
        {/* Brand */}
        <Link to="/" className="navbar-brand">
          <img src="/assets/navbar/brand/Vector.svg" alt="" />
          <img src="/assets/navbar/brand/CHILL.svg" alt="CHILL" />
        </Link>

        {/* Navigation */}
        <nav className="navbar-menu">
          <a href="#series">Series</a>
          <a href="#films">Film</a>
          <a href="#my-list">Daftar Saya</a>
        </nav>

        {/* User Actions */}
        <div className="navbar-actions">
          {/* Profile Dropdown */}
          <details className="navbar-profile-dropdown">
            <summary className="navbar-profile">
              <img
                src="/assets/navbar/Ellips.svg"
                alt="User Avatar"
                className="navbar-avatar"
              />
              <ChevronDown size={16} className="dropdown-icon" />
            </summary>

            <div className="profile-dropdown-menu">
              <Link to="/">
                <UserRound size={22} />
                Profile Saya
              </Link>
              <Link to="/">
                <Star size={22} />
                Ubah Premium
              </Link>
              <button type="button" onClick={() => alert("Logout")}>
                <LogOut size={22} />
                Keluar
              </button>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
