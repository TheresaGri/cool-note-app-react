const putNote = async (note) => {
  await fetch(`http://localhost:8080/notes/${note.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
};

export default putNote;
