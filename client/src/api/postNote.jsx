const postNote = async(note) =>  {
  await fetch(`http://localhost:8080/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
}

export default postNote;