import { useState } from "react";
import postNote from "../../api/postNote";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const [note, setNote] = useState(null);
  const navigate = useNavigate();

   const addNote = async () => {
      await postNote(note);
      navigate("/");
  } 

  return (
    <div className="add_Note">
      <label> Note text: 
      <input type = "text" onChange= {(event) => setNote(event.target.value)}></input>
      </label>
      <button onClick={addNote}>Add note</button>
    </div>
  );
};
export default AddPage;
