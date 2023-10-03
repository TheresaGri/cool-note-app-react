import { useEffect, useState } from "react";
import fetchNoteByid from "/home/theresa/repos/cool-note-app-react/client/src/api/fetchNoteById";
import { useParams } from "react-router-dom";
import EditForm from "../../components/EditForm/EditForm";
import { useNavigate } from "react-router-dom";
import putNote from "../../api/putNote";

const EditPage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadNote = async () => {
      try {
        const data = await fetchNoteByid(id);
        setNote(data);
      } catch (error) {
        console.error("Error loading note:", error);
      }
    };
    loadNote();
  }, [id]);

  const handleChange = (event) => {
    if (note !== null) {
      setNote({ ...note, description: event.target.value });
    }
  };

  console.log(note);
  //check this function again, something is not working
  const handleSubmit = async () => {
      console.log("line 33", note.id, note.description);
      if (note !== null && note !== undefined) {
        await putNote(note);
      }
      navigate("/");
    
  };

  return (
    <div className="note-form">
      <EditForm
        note={note}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};
export default EditPage;
