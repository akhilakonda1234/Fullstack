import React from "react";
import Navbar from "../components/Navbar";

function Admin() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>🛡️ Admin Dashboard</h1>

        <h2>Welcome, {user.name}</h2>

        <div className="card">
          <p><strong>Name :</strong> {user.name}</p>
          <p><strong>UID :</strong> {user.uid}</p>
          <p><strong>Role :</strong> {user.role}</p>
          <p><strong>Login Time :</strong> {user.loginTime}</p>
        </div>
      </div>
    </>
  );
}

export default Admin;