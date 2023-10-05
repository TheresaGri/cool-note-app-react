import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StartPage from "./pages/StartPage/StartPage";
import EditPage from "./pages/EditPage/EditPage";
import AddPage from "./pages/AddPage/AddPage";

//counter has to be initialized here

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<StartPage />} />
          <Route path="/main" element={<StartPage />} />
          <Route path= "/note/:id" element = {<EditPage/>} />
          <Route path="/add" element ={<AddPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
