import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  const login = () => setIsLoggedIn(true);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <h1>JWT Authentication System</h1>

      {isLoggedIn ? (
        <Dashboard logout={logout} />
      ) : (
        <Login login={login} />
      )}
    </div>
  );
}

export default App;