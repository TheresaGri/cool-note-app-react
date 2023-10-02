const note = async (id) => {
  const res = await fetch(`http://localhost:8080/notes/id/${id}`);
  const data = await res.json();
  return data;
};
export default note;
