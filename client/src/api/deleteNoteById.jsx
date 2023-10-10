const deleteNoteById = async (id) => {
  await fetch(`http://localhost:8080/notes/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default deleteNoteById;