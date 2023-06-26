import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Team from "./components/Team.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Team" element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
