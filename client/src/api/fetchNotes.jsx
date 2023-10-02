const notes = async () => {
  const res = await fetch('http://localhost:8080/notes');
  const data = await res.json();
  return data;
} 

export default notes;