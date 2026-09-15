import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div
      style={{
        background: "#4CAF50",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
      }}
    >
      <h2 style={{ margin: 0 }}>Role Based Access Control (RBAC)</h2>

      <div>
        <span style={{ marginRight: "20px", fontWeight: "bold" }}>
          {user?.name} ({user?.role})
        </span>

        <button
          onClick={logout}
          style={{
            padding: "8px 18px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            background: "#ffffff",
            color: "#4CAF50",
            fontWeight: "bold"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;