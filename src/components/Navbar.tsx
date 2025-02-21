import React from "react";
import "./Navbar.css";

interface NavbarProps {
  userData: { userType: string; name: string } | null;
}

const Navbar: React.FC<NavbarProps> = ({ userData }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <a href="/" className="text-white text-xl font-bold">
            Donora
          </a>{" "}
          {/* Your Logo/Brand */}
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="/donor" className="text-white hover:text-gray-300">
                Donor
              </a>
            </li>
            <li>
              <a href="/patient" className="text-white hover:text-gray-300">
                Patient
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
