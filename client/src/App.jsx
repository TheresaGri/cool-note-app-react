import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import StartPage from "./pages/StartPage/StartPage";
import EditPage from "./pages/EditPage/EditPage";
import AddPage from "./pages/AddPage/AddPage";


function App() {
  //counter has to be initialized here
  const [editCounter, setEditCounter] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<StartPage editCounter={editCounter} setEditCounter={setEditCounter} />} />
          <Route path= "/note/:id" element = {<EditPage/>} />
          <Route path="/add" element ={<AddPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
