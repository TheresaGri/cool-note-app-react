import "./EditForm.css";

const EditForm = ({ note, handleSubmit, handleChange }) => {
  return (
    <div className="edit_form">
      {note !== null ? (
        <form >
          <label>
            Note description:
            <textarea
              value={note.description}
              onChange={handleChange}
            ></textarea>
          </label>
          <button onClick ={handleSubmit}>Submit</button>
        </form>
      ) : (
        <div> no note found by this id</div>
      )}
    </div>
  );
};

export default EditForm;
