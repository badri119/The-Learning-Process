import "./App.css";
import LandingPage from "./components/LandingPage";
import Quote from "./components/Quote";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route path="/quote-generator" element={<Quote />}></Route>
      </Routes>
    </div>
  );
}

export default App;
