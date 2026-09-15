import React from "react";
import { useNavigate } from "react-router-dom";

function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right, #ff9966, #ff5e62)"
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "15px",
          textAlign: "center",
          width: "400px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
        }}
      >
        <h1 style={{ color: "red" }}>🚫 Unauthorized Access</h1>

        <p style={{ fontSize: "18px" }}>
          You are not allowed to access this page.
        </p>

        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}

export default Unauthorized;