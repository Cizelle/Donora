import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import Navbar from "./Navbar";
import kidneyImage from "./kidney.jpg";
import liverImage from "./liver.jpg";
import heartImage from "./heart.webp";

interface HeroProps {
  userData: { userType: string; name: string } | null;
}

const Hero: React.FC<HeroProps> = ({ userData }) => {
  const organs = [
    { name: "Kidney", image: kidneyImage },
    { name: "Liver", image: liverImage },
    { name: "Heart", image: heartImage },
  ];

  const organBoxRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (organBoxRef.current) {
        setScrollPosition(organBoxRef.current.scrollTop);
      }
    };

    if (organBoxRef.current) {
      organBoxRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (organBoxRef.current) {
        organBoxRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []); // <-- Closing curly brace for useEffect is here

  return (
    // <-- Return statement starts here
    <section className="hero">
      <Navbar userData={userData} />
      <div className="hero-content">
        <h1>Welcome to Donora</h1>
        <p>Your platform for connecting donors and recipients.</p>

        {userData && (
          <div className="user-welcome">
            <h2>Welcome, {userData.name}!</h2>
            <p>You are logged in as a {userData.userType}.</p>
          </div>
        )}

        {!userData && <p>Please log in to access more features.</p>}

        <div className="organ-box" ref={organBoxRef}>
          {organs.map((organ) => (
            <div key={organ.name} className="organ-item">
              <img src={organ.image} alt={organ.name} className="organ-image" />
              <p className="organ-name">{organ.name}</p>
            </div>
          ))}
        </div>

        <div className="hero-buttons">
          <button>Learn More</button>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
