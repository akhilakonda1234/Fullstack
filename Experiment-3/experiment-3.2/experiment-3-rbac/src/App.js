import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Editor from "./pages/Editor";
import Viewer from "./pages/Viewer";
import Unauthorized from "./pages/Unauthorized";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Login />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Admin Route */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="Admin">
            <Admin />
          </ProtectedRoute>
        }
      />

      {/* Editor Route */}
      <Route
        path="/editor"
        element={
          <ProtectedRoute role="Editor">
            <Editor />
          </ProtectedRoute>
        }
      />

      {/* Viewer Route */}
      <Route
        path="/viewer"
        element={
          <ProtectedRoute role="Viewer">
            <Viewer />
          </ProtectedRoute>
        }
      />

      {/* Unauthorized Page */}
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Invalid URL */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;