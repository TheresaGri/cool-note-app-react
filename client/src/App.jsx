import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StartPage from "./pages/StartPage/StartPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<StartPage />} />
          <Route path="/main" element={<StartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
