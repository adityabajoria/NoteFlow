import { FaDeleteLeft, FaArchive } from "react-icons/fa6";
import PropTypes from "prop-types";

const Note = (props) => {
  const { id, text, date, Delete, Archive } = props;
  return (
    <div className="note">
      <span>{text}</span>
      <div className="footer">
        <small>{date}</small>
        <FaDeleteLeft
          onClick={() => Delete(id)}
          className="del-btn"
          size="1.2em"
        />
        <FaArchive
          onClick={() => Archive(id)}
          className="archive-btn"
          size="1.2em"
        />
      </div>
    </div>
  );
};

Note.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  Delete: PropTypes.func.isRequired,
  Archive: PropTypes.func.isRequired,
};

export default Note;
