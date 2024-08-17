import Note from "./Note";
import PropTypes from "prop-types";

const ArchiveList = (props) => {
  const { archived } = props;
  return (
    <div className="archive-list">
      <h2>Archived Notes</h2>
      {archived.length > 0 ? (
        archived.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            Delete={() => {}} // Optionally handle deletion of archived notes
            Archive={() => {}}
          /> // Archive button can be disabled or hidden/>
        ))
      ) : (
        <span>No Archived Notes found...</span>
      )}
    </div>
  );
};

ArchiveList.propTypes = {
  archived: PropTypes.array.isRequired,
};
export default ArchiveList;
