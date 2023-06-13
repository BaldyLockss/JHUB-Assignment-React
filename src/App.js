import "./App.css";
import Home from "./Components/Home/Home";
import Page from "./Components/Page/Page";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
