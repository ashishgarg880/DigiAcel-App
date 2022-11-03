import "./App.css";
import Admin from "./component/Admin";
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
      <Outlet />
    </div>
  );
}

export default App;
