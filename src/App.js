import { Routes, Route } from "react-router";

import { Header } from "./components/Header";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/LogIn" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
