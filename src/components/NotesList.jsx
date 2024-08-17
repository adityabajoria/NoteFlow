import { FaArchive } from "react-icons/fa";
import Note from "./Note";
import CreateNote from "./CreateNote";
import PropTypes from "prop-types";

const NotesList = (props) => {
  const { notes, AddNote, Delete, Archive } = props;

  return (
    <div className="n-list">
      {notes.map((note) => (
        <div key={note.id}>
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            Delete={Delete}
            Archive={Archive}
          />
          <FaArchive />
        </div>
      ))}
      <CreateNote AddNote={AddNote} Delete={Delete} />
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  AddNote: PropTypes.string.isRequired,
  Delete: PropTypes.func.isRequired,
  Archive: PropTypes.func.isRequired,
};

export default NotesList;
