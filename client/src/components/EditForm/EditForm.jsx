import "./EditForm.css";

const EditForm = ({ note, handleSubmit, handleChange }) => {

  const handleSubmitPreventDefault = (event) => {
     event.preventDefault();
   }
  return (
    <div className="edit_form">
      {note !== null ? (
        <form onSubmit={handleSubmitPreventDefault}>
          <label>
            Note description:
            <textarea
              value={note.description}
              onChange={handleChange}
            ></textarea>
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      ) : (
        <div> no note found by this id</div>
      )}
    </div>
  );
};

export default EditForm;
