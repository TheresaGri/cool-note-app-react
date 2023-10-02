import DisplayNotes from "../../components/DisplayNotes";
import fetchNotes from "/home/theresa/repos/cool-note-app-react/client/src/api/fetchNotes";
import { useEffect, useState } from "react";

const StartPage = () => {
  const [notes, setNotes] = useState([]);
  const [editCounter, setEditCounter] = useState(0);

  useEffect(() => {
    const loadNotes = async () => {
      const data = await fetchNotes();
      setNotes(data);
    };
    loadNotes();
  }, []);

  console.log(notes);
  const onClickEdit = () => {
    setEditCounter(editCounter + 1);
  };

  return (
    <div className="start-page">
      <DisplayNotes
        notes={notes}
        onClickEdit={onClickEdit}
        editCounter={editCounter}
      />
    </div>
  );
};
export default StartPage;
