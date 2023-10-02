import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StartPage from "./pages/StartPage/StartPage";
import EditPage from "./pages/EditPage/EditPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<StartPage />} />
          <Route path="/main" element={<StartPage />} />
          <Route path= "/note/:id" element = {<EditPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
