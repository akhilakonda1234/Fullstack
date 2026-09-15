import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [drafts, setDrafts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Load drafts from localStorage
  useEffect(() => {
    const savedDrafts = JSON.parse(localStorage.getItem("drafts")) || [];
    setDrafts(savedDrafts);
  }, []);

  // Save drafts to localStorage
  useEffect(() => {
    localStorage.setItem("drafts", JSON.stringify(drafts));
  }, [drafts]);

  // Mock API
  const mockAPI = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  // Save or Update Draft
  const saveDraft = async () => {
    if (!title || !content) {
      alert("Please enter title and content");
      return;
    }

    setLoading(true);
    await mockAPI();

    if (editId !== null) {
      const updatedDrafts = drafts.map((draft) =>
        draft.id === editId
          ? { ...draft, title, content }
          : draft
      );

      setDrafts(updatedDrafts);
      setMessage("Draft Updated Successfully");
      setEditId(null);
    } else {
      const newDraft = {
        id: Date.now(),
        title,
        content,
      };

      setDrafts([...drafts, newDraft]);
      setMessage("Draft Saved Successfully");
    }

    setTitle("");
    setContent("");
    setLoading(false);
  };

  // Edit Draft
  const editDraft = (draft) => {
    setTitle(draft.title);
    setContent(draft.content);
    setEditId(draft.id);
  };

  // Delete Draft
  const deleteDraft = async (id) => {
    setLoading(true);
    await mockAPI();

    const filteredDrafts = drafts.filter(
      (draft) => draft.id !== id
    );

    setDrafts(filteredDrafts);
    setMessage("Draft Deleted Successfully");
    setLoading(false);
  };

  return (
    <div className="container">

      <h1>Draft Management System</h1>

      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <button onClick={saveDraft}>
        {editId ? "Update Draft" : "Save Draft"}
      </button>

      {loading && <p className="loading">Loading...</p>}

      {message && <p className="message">{message}</p>}

      <h2>Saved Drafts</h2>

      {drafts.length === 0 ? (
        <p>No Drafts Available</p>
      ) : (
        drafts.map((draft) => (
          <div className="card" key={draft.id}>
            <h3>{draft.title}</h3>

            <p>{draft.content}</p>

            <button
              className="edit"
              onClick={() => editDraft(draft)}
            >
              Edit
            </button>

            <button
              className="delete"
              onClick={() => deleteDraft(draft.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;