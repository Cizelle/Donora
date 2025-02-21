// src/components/UserTypeSelection.tsx
import React from "react";
import "./UserTypeSelection.css";
import logo from "./donora.png";

interface UserTypeSelectionProps {
  onSelect: (userType: string) => void;
}

const UserTypeSelection: React.FC<UserTypeSelectionProps> = ({ onSelect }) => {
  return (
    <div className="user-type-selection-container">
      <div className="user-type-selection-card">
        <div className="donora-title-container">
          <div className="donora-title-logo">
            {" "}
            {/* Logo container */}
            <img src={logo} alt="Donora Logo" /> {/* Your logo image */}
          </div>
          <span className="donora-title">DONORA</span>
        </div>
        <h2 className="user-type-selection-subtitle">Select User Type</h2>
        <div className="user-type-selection-buttons">
          <button
            className="user-type-selection-button donor-button"
            onClick={() => onSelect("donor")}
          >
            Donor
          </button>
          <button
            className="user-type-selection-button recipient-button"
            onClick={() => onSelect("recipient")}
          >
            Recipient
          </button>
          <button
            className="user-type-selection-button hospital-button"
            onClick={() => onSelect("hospital")}
          >
            Hospital
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;
