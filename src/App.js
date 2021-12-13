import { Routes, Route } from "react-router";

import { Header } from "./components/Header";
import { MyPosts } from "./pages/MyPosts";
import { AllPosts } from "./pages/AllPosts";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="myPosts" element={<MyPosts />} />
        <Route path="allPosts" element={<AllPosts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/LogIn" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
