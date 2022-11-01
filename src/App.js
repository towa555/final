import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import './App.css';
import Forget from "./pages/forget";
import Login from "./pages/login";
import SignIN from "./pages/signin";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/signin" element={<SignIN />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forget" element={<Forget />} />
    </Routes>
    </Router>

  );
}

export default App;
