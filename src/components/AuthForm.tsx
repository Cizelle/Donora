// src/components/AuthForm.tsx
import React, { useState } from "react";
import "./AuthForm.css"; // Correct import path (relative to AuthForm.tsx)

interface AuthFormProps {
  onLogin: (username: string, password: string, userType: string) => void;
  onRegister: (username: string, password: string, userType: string) => void;
  userType: string;
  onBack: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  onLogin,
  onRegister,
  userType,
  onBack,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    if (isRegistering) {
      onRegister(username, password, userType);
    } else {
      onLogin(username, password, userType);
    }
  };

  return (
    <div className="auth-form-container">
      <div className="auth-form-card">
        <h2 className="auth-form-title">
          {isRegistering ? "Register" : "Login"} ({userType})
        </h2>
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Form inside the card */}
          {error && <p className="auth-form-error">{error}</p>}
          <div className="mb-4">
            <label htmlFor="username" className="auth-form-label">
              {userType === "donor"
                ? "Donor ID/Email"
                : userType === "patient"
                ? "Patient ID/Email"
                : "Organization ID/Email"}
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              className="auth-form-input"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="auth-form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              className="auth-form-input"
              required
            />
          </div>
          <button type="submit" className="auth-form-button">
            {isRegistering ? "Register" : "Login"}
          </button>
          <p className="auth-form-toggle">
            {isRegistering
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <span
              onClick={() => setIsRegistering(!isRegistering)}
              className="auth-form-toggle-link"
            >
              {isRegistering ? "Login" : "Register"}
            </span>
          </p>
        </form>
        <button className="auth-form-back-button" onClick={onBack}>
          Back to User Type Selection
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
