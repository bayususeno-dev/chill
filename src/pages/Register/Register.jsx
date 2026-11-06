import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "./Register.css";
import GoogleAuth from "../../components/GoogleAuth/GoogleAuth";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("Kata sandi tidak cocok.");
      return;
    }

    setPasswordError("");

    // Registration will be connected to a backend later.
  }

  return (
    <main className="register-page">
      <section className="register-container">
        {/* Brand */}
        <Link to="/" className="register-brand">
          <img src="/assets/navbar/brand/Vector.svg" alt="" />
          <img src="/assets/navbar/brand/CHILL.svg" alt="CHILL" />
        </Link>

        {/* Heading */}
        <div className="register-header">
          <h1>Daftar</h1>
          <p>Segera daftar untuk memulai!</p>
        </div>

        {/* Registration Form */}
        <form className="register-form" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="register-field">
            <label htmlFor="register-name">Nama Lengkap</label>

            <input
              type="text"
              id="register-name"
              name="name"
              placeholder="Masukkan nama lengkap"
              autoComplete="name"
              required
            />
          </div>

          {/* Password */}
          <div className="register-field">
            <label htmlFor="register-password">Kata Sandi</label>

            <div className="register-password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="register-password"
                name="password"
                placeholder="Masukkan kata sandi"
                autoComplete="new-password"
                minLength={8}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setPasswordError("");
                }}
                required
              />

              <button
                type="button"
                className="register-password-toggle"
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

            <span className="register-hint">Minimal 8 karakter.</span>
          </div>

          {/* Confirm Password */}
          <div className="register-field">
            <label htmlFor="register-confirm-password">
              Konfirmasi Kata Sandi
            </label>

            <div className="register-password-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="register-confirm-password"
                name="confirmPassword"
                placeholder="Ulangi kata sandi"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                  setPasswordError("");
                }}
                aria-invalid={Boolean(passwordError)}
                aria-describedby={passwordError ? "password-error" : undefined}
                required
              />

              <button
                type="button"
                className="register-password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={
                  showConfirmPassword
                    ? "Sembunyikan kata sandi"
                    : "Tampilkan kata sandi"
                }
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {passwordError && (
              <p id="password-error" className="register-error" role="alert">
                {passwordError}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="button-secondary-contained register-submit"
          >
            Daftar
          </button>
          <GoogleAuth action="Daftar" />
        </form>

        {/* Login Link */}
        <p className="register-login">
          Sudah punya akun? <Link to="/login">Masuk</Link>
        </p>
      </section>
    </main>
  );
}

export default Register;
