import NotesList from "./components/NotesList";
import "./App.css";
import SearchBar from "./components/Search";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

const App = () => {
  /*
 Additional Features to add in the App:
 - Markdown Support (bold, italic, headers) - use react-markdown lib
 - Use Google Fonts for text
 - Drag-drop notes (react-beautiful-dnd)
 - Note Sharing (enable a 'sharing' button - share using email)
 - Note Archive
 */
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <div>
          <h1 className="header">NotesFlow</h1>
        </div>
        <button onClick={() => setDarkMode((prev) => !prev)} className="save">
          {darkMode ? "lightMode" : "darkMode"}
        </button>
        <SearchBar onSearch={setSearch} /> {/* Update prop name */}
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(search)
          )}
          AddNote={addNote}
          Delete={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
