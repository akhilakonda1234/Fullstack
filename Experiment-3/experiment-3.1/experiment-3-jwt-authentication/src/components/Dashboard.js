import React from "react";

function Dashboard({ logout }) {
  const user = JSON.parse(localStorage.getItem("token"));

  return (
    <div className="card">
      <h2>Welcome</h2>

      <h3>Name : {user.name}</h3>

      <h3>UID : {user.uid}</h3>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;