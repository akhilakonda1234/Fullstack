import React, { useState } from "react";

function Login({ login }) {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");

  const users = [
    {
      uid: "24BAI70855",
      name: "Akhila Konda",
      password: "admin123",
    },
    {
      uid: "24BAI70001",
      name: "Rahul",
      password: "user123",
    },
  ];

  const handleLogin = () => {
    const user = users.find(
      (u) => u.uid === uid && u.password === password
    );

    if (user) {
      localStorage.setItem("token", JSON.stringify(user));
      login();
    } else {
      alert("Invalid UID or Password");
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter UID"
        value={uid}
        onChange={(e) => setUid(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;