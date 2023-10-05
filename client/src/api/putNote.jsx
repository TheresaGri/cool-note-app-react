const putNote = async (note) => {
  console.log("beginning of putNote");
  await fetch(`http://localhost:8080/notes/${note.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
  console.log("end of putNote");

};

export default putNote;
