import "./DisplayNotes.css";

const DisplayNotes = ({ notes, onClickEdit, editCounter }) => {
  return (
    <div>
      <div className="notes">
        {notes.length !== 0 ? (
          notes.map((note) => (
            <div key={note.id} className = "note">
              <p>{note.description}</p>
              <button onClick={() => onClickEdit(parseInt(note.id))}>Edit</button>
            </div>
          ))
        ) : (
          <div>no notes saved</div>
        )}
      </div>
      <small>Edit counter: {editCounter}</small>
    </div>
  );
};

export default DisplayNotes;
