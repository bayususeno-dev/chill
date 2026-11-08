import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "./Login.css";
import GoogleAuth from "../../components/GoogleAuth/GoogleAuth";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    // Authentication will be connected later.
  }

  return (
    <main className="login-page">
      <section className="login-container">
        {/* Brand */}
        <Link to="/" className="login-brand">
          <img src="/assets/navbar/brand/Vector.svg" alt="" />
          <img src="/assets/navbar/brand/CHILL.svg" alt="CHILL" />
        </Link>

        {/* Heading */}
        <div className="login-header">
          <h1>Masuk</h1>
          <p>Selamat datang kembali!</p>
        </div>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="login-field">
            <label htmlFor="login-email">Email</label>

            <input
              type="email"
              id="login-email"
              name="email"
              placeholder="Masukkan email"
              autoComplete="email"
              required
            />
          </div>

          {/* Password */}
          <div className="login-field">
            <label htmlFor="login-password">Kata Sandi</label>

            <div className="login-password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="login-password"
                name="password"
                placeholder="Masukkan kata sandi"
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                className="login-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword
                    ? "Sembunyikan kata sandi"
                    : "Tampilkan kata sandi"
                }
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          {/* Form Links */}
          <div className="login-form-links">
            <p>
              Belum punya akun? <Link to="/register">Daftar</Link>
            </p>

            <Link to="/" className="login-forgot-password">
              Lupa kata sandi?
            </Link>
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="button-secondary-contained login-submit"
          >
            Masuk
          </button>

          <GoogleAuth action="Masuk" />
        </form>
      </section>
    </main>
  );
}

export default Login;
