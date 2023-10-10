import "./DisplayNotes.css";
import { useNavigate } from "react-router-dom";

const DisplayNotes = ({ notes, onClickEdit, onDelete }) => {
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
              <button onClick={() => onDelete(parseInt(note.id))}>
                Delete
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
