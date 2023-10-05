import DisplayNotes from "../../components/DisplayNotes";
import fetchNotes from "/home/theresa/repos/cool-note-app-react/client/src/api/fetchNotes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  //change so that edicounter is always updated, maybe in the router
  const [notes, setNotes] = useState([]);
  const [editCounter, setEditCounter] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const loadNotes = async () => {
      const data = await fetchNotes();
      setNotes(data);
    };
    loadNotes();
  }, []);

  const onClickEdit = (id) => {
    console.log(id);
    setEditCounter(editCounter + 1);
    navigate(`/note/${id}`)
  };

  return (
    <div className="start-page">
      <DisplayNotes
        notes={notes}
        onClickEdit={onClickEdit}
      />
      <small>{editCounter}</small>
    </div>
  );
};
export default StartPage;
