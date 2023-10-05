import "./DisplayNotes.css";
import { useNavigate } from "react-router-dom";

const DisplayNotes = ({ notes, onClickEdit}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="notes">
        {notes.length !== 0 ? (
          notes.map((note) => (
            <div key={note.id} className="note">
              <p>{note.description}</p>
              <button onClick={() => onClickEdit(parseInt(note.id))}>
                Edit
              </button>
            </div>
          ))
        ) : (
          <div>no notes saved</div>
        )}
      </div>
      <button onClick={() => navigate("/add")}>Add note</button>
    </div>
  );
};

export default DisplayNotes;
