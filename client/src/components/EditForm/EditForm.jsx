import "./EditForm.css";

const EditForm = ({ note, handleSubmit, handleChange }) => {
  return (
    <div className="edit_form">
      {note !== null ? (
        <form onSubmit={handleSubmit}>
          <label>
            Note description:
            <textarea
              value={note.description}
              onChange={handleChange}
            ></textarea>
          </label>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <div> no note found by this id</div>
      )}
    </div>
  );
};

export default EditForm;
