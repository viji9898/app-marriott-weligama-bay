import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Main } from "./pages/Main";
import { Budget } from "./pages/Budget";
import { Directory } from "./pages/Directory";
import { EditBudget } from "./admin/editbudget";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />}>
          <Route path="/budget" element={<Budget />} />
          <Route path="/directory" element={<Directory />} />
        </Route>
        <Route exact path="/*" element={<Main />} />
        <Route exact path="/admin" element={<EditBudget />} />
      </Routes>
    </Router>
  );
}

export default App;
