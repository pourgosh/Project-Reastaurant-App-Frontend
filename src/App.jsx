import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NavBar from "./components/Navbar/NavBar";
import AdminPage from "./pages/AdminPage/AdminPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin/control" element={<AdminPage />} />
        {/* <Route path="/user/registration" element={<AboutPage />} />
        <Route path="/user/login" element={<AboutPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
