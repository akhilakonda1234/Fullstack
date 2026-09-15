import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Admin");
  const [name, setName] = useState("");
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (name.trim() === "" || uid.trim() === "" || password.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    let correctPassword = "";

    switch (role) {
      case "Admin":
        correctPassword = "admin123";
        break;
      case "Editor":
        correctPassword = "editor123";
        break;
      case "Viewer":
        correctPassword = "viewer123";
        break;
      default:
        correctPassword = "";
    }

    if (password !== correctPassword) {
      alert("Invalid Credentials");
      return;
    }

    const payload = {
      name,
      uid,
      role,
      loginTime: new Date().toLocaleString(),
    };

    localStorage.setItem("user", JSON.stringify(payload));
    localStorage.setItem("token", btoa(JSON.stringify(payload)));

    if (role === "Admin") {
      navigate("/admin");
    } else if (role === "Editor") {
      navigate("/editor");
    } else {
      navigate("/viewer");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h1>Role Based Access Control</h1>

        <form onSubmit={handleLogin}>

          <label>Select Role</label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>

          <label>Name</label>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>UID</label>

          <input
            type="text"
            placeholder="Enter UID"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;