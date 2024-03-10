import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NavBar from "./components/Navbar/NavBar";
import AdminPage from "./pages/AdminPage/AdminPage";
import StaffPage from "./pages/StaffRegistrationPage/StaffPage";
import StaffHomePage from "./pages/StaffHomePage/StaffHomePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin/control" element={<AdminPage />} />
        <Route path="/staff/registration" element={<StaffPage />} />
        <Route path="/staff/reservations" element={<StaffHomePage />} />
      </Routes>
    </>
  );
}

export default App;
