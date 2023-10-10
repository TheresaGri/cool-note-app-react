import DisplayNotes from "../../components/DisplayNotes";
import fetchNotes from "/home/theresa/repos/cool-note-app-react/client/src/api/fetchNotes";
import deleteNoteById from "../../api/deleteNoteById";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StartPage = ({ editCounter, setEditCounter }) => {
  //change so that edicounter is always updated, maybe in the router
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadNotes = async () => {
      const data = await fetchNotes();
      setNotes(data);
    };
    loadNotes();
  }, []);

  const onClickEdit = (id) => {
    setEditCounter((prevCounter) => prevCounter + 1);
    navigate(`/note/${id}`);
  };

  const onDeleteNote = async (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    await deleteNoteById(id);
    
  };

  return (
    <div className="start-page">
      <DisplayNotes
        notes={notes}
        onClickEdit={onClickEdit}
        onDelete={onDeleteNote}
      />
      <small>{editCounter}</small>
    </div>
  );
};
export default StartPage;
