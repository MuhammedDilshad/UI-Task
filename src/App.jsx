import "./App.css";
import OfficeAnalysis from "./Pages/OfficeAnalysis/OfficeAnalysis";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SchoolPage from "./Pages/SchoolPage/SchoolPage";
import GraphPage from "./Pages/GraphPage/GraphPage";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<OfficeAnalysis />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/school" element={<SchoolPage />} />
        <Route path="/graph" element={<GraphPage />} />
      </Routes>
    </div>
  );
}

export default App;
