import { useEffect, useState } from "react";
import fetchNotes from "/home/theresa/repos/cool-note-app-react/client/src/api/fetchNotes";

const DisplayNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(()=> {
    const loadNotes = async () => {
      const data = await fetchNotes();
      setNotes(data);
    }
    loadNotes();
  }, []);

  console.log(notes);
 
  return (
    <div className = "notes">
      {notes.map((note) => <p key = {note.id}>{note.description}</p>)}
    </div>
  
  );
}

export default DisplayNotes;