import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NotesList from "./components/NotesList";
import ArchiveList from "./components/ArchiveList";
import SearchBar from "./components/Search";
import { nanoid } from "nanoid";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }

    const savedArchivedNotes = JSON.parse(
      localStorage.getItem("archived-notes-data")
    );
    if (savedArchivedNotes) {
      setArchivedNotes(savedArchivedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
    localStorage.setItem("archived-notes-data", JSON.stringify(archivedNotes));
  }, [notes, archivedNotes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleString(),
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const archiveNote = (id) => {
    const noteToArchive = notes.find((note) => note.id === id);
    if (noteToArchive) {
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
      setArchivedNotes((prevArchivedNotes) => [
        ...prevArchivedNotes,
        noteToArchive,
      ]);
    }
  };

  return (
    <Router>
      <div className={`${darkMode ? "dark-mode" : ""}`}>
        <div className="container">
          <h1 className="header">NoteFlow</h1>
          <button onClick={() => setDarkMode((prev) => !prev)} className="save">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/archive">Archived Notes</Link>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar onSearch={setSearch} />
                  <NotesList
                    notes={notes.filter((note) =>
                      note.text.toLowerCase().includes(search.toLowerCase())
                    )}
                    AddNote={addNote}
                    Delete={deleteNote}
                    Archive={archiveNote}
                  />
                </>
              }
            />
            <Route
              path="/archive"
              element={<ArchiveList archivedNotes={archivedNotes} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
