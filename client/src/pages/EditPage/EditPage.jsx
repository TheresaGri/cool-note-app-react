import { useEffect, useState } from "react";
import fetchNoteByid from "/home/theresa/repos/cool-note-app-react/client/src/api/fetchNoteById";
import { useParams } from "react-router-dom";
import EditForm from "../../components/EditForm/EditForm";
import { useNavigate } from "react-router-dom";
import patchNote from "../../api/patchNote";

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
    setNote({...note, description: event.target.value });
  };
  console.log(note);

  //check this function again, something is not working
  const handleSubmit = async () => {
    try {
      const updatedNote = { ...note }; // Create a copy of the current note object
      await patchNote(updatedNote); // Send the updated note to the server
      navigate("/"); // Navigate back to the main page
    } catch (error) {
      console.error("Error updating note:", error);
    }
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
