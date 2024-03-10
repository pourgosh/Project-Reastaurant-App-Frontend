import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NavBar from "./components/Navbar/NavBar";
import AdminPage from "./pages/AdminPage/AdminPage";
import StaffPage from "./pages/StaffRegistrationPage/StaffPage";
import StaffHomePage from "./pages/StaffHomePage/StaffHomePage";
import ProfileLink from "./components/ProfileLink/ProfileLink";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";

function App() {
  return (
    <>
      <NavBar />
      <ProfileLink />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin/control" element={<AdminPage />} />
        <Route path="/staff/registration" element={<StaffPage />} />
        <Route path="/staff/reservations" element={<StaffHomePage />} />
        <Route path="/user/profile" element={<UserProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
