import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Import routing components
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import UserTypeSelection from "./components/UserTypeSelection";
import AuthForm from "./components/AuthForm";

// ... (interfaces and products array remain the same)

function App() {
  const [userType, setUserType] = useState<string | null>(
    localStorage.getItem("userType")
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true" || false
  );
  const [userData, setUserData] = useState<any | null>(null);

  useEffect(() => {
    if (userType) {
      localStorage.setItem("userType", userType);
    }
  }, [userType]);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn.toString());
  }, [isLoggedIn]);

  const handleUserTypeSelect = (type: string) => {
    setUserType(type);
  };

  const handleLogin = (
    username: string,
    password: string,
    userType: string
  ) => {
    // ... (your actual login logic - replace the example below)
    if (username && password) {
      // Example login
      setIsLoggedIn(true);
      setUserData({ userType, name: username });
    } else {
      alert("Please enter username and/or password");
    }
  };

  const handleRegister = (
    username: string,
    password: string,
    userType: string
  ) => {
    // ... (your registration logic)
    handleLogin(username, password, userType); //example, you may not want to auto login after register
  };

  const handleBackToUserType = () => {
    setUserType(null);
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<UserTypeSelection onSelect={handleUserTypeSelect} />}
          />
          <Route
            path="/auth"
            element={
              userType ? (
                <AuthForm
                  onLogin={handleLogin}
                  onRegister={handleRegister}
                  userType={userType}
                  onBack={handleBackToUserType}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/hero"
            element={
              isLoggedIn ? (
                <>
                  <Hero />
                </>
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
        </Routes>
      </Router>
      {userType === null ? (
        <UserTypeSelection onSelect={handleUserTypeSelect} />
      ) : (
        <AuthForm
          onLogin={handleLogin}
          onRegister={handleRegister}
          userType={userType}
          onBack={handleBackToUserType}
        />
      )}
      {isLoggedIn && (
        <div>
          <Hero />
          <div className="container mx-auto p-4">
            {/* ... rest of your content */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
