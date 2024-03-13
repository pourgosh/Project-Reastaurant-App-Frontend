import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import { useCookies } from "react-cookie";
import AuthForm from "../AuthForm/AuthForm";
import logo from "../../assets/Images/logo.png";
import signupBg from "../../assets/Images/signupBg.png";

const NavBar = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies("access_token");

  const storageToken = localStorage.getItem("userID");

  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("staffID");
    window.localStorage.removeItem("profileID");
    navigate("/");
    location.reload();
  };

  return (
    <>
      {!storageToken ? (
        <div className="navbarWrapper">
          <div className="navbarImgContainer">
            <img
              src={logo}
              onClick={() => {
                navigate("/");
                console.log("yoyo");
              }}
            />
          </div>
          <div className="navbarLinks">
            <Link to="/">Home</Link>
            <Link to="/make-reservation">Reservation</Link>
            <section
              className="loginSection"
              onClick={() => {
                setShowForm(true);
                setFormType("login");
              }}
            >
              <p>Login</p>
            </section>
            <section
              className="navSection"
              style={{
                backgroundImage: `url(${signupBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => {
                setShowForm(true);
                setFormType("signup");
              }}
            >
              <p>Sign up</p>
            </section>
          </div>
        </div>
      ) : (
        <div className="loginNavbarWrapper">
          <div className="navbarImgContainer">
            <img
              src={logo}
              onClick={() => {
                navigate("/");
                console.log("yoyo");
              }}
            />
          </div>
          <div className="navbarLinks">
            <Link to="/">Home</Link>
            <Link to="/make-reservation">Reservation</Link>
            <section
              className="logoutSection"
              style={{
                backgroundImage: `url(${signupBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              onClick={logout}
            >
              <p>Log Out</p>
            </section>
          </div>
        </div>
      )}
      {showForm && <AuthForm formType={formType} setShowForm={setShowForm} />}
    </>
  );
};

export default NavBar;
