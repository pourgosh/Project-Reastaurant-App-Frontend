import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import { useCookies } from "react-cookie";
import AuthForm from "../AuthForm/AuthForm";
import logo from "../../assets/Images/logo.png";
//import signupBg from "../../assets/Images/signupBg.png";
import NavItem from "./components/NavItem";

const NavBar = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("");
  const [navBurger, setNavBurger] = useState(false);
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

  const controlNavBurger = () => {
    setNavBurger(!navBurger);
  };

  return (
    <>
      <div className="navWrapper">
        <div className="navInnerWrapper">
          <div className="imageWrapper">
            <img
              src={logo}
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <div className="navGroupWrapper">
            <NavItem to={"/"} />
            <NavItem to={"make-reservation"} label="Reservation" />

            {!storageToken ? (
              <>
                <NavItem
                  label="Sign Up"
                  onClick={() => {
                    setFormType("signup");
                    setShowForm(true);
                  }}
                />
                <NavItem
                  label="Login"
                  onClick={() => {
                    setFormType("login");
                    setShowForm(true);
                  }}
                />
              </>
            ) : (
              <>
                <NavItem label="Logout" onClick={logout} />
              </>
            )}
          </div>

          <div className="burgerMenuContainer">
            <div className="burgerMenuBtnContainer">
              <div className="burgerMenuBtn" onClick={controlNavBurger}>
                <span
                  style={{
                    width: "40px",
                    height: "8px",
                    backgroundColor: "white",
                  }}
                ></span>
                <span
                  style={{
                    width: "40px",
                    height: "8px",
                    backgroundColor: "white",
                  }}
                ></span>
                <span
                  style={{
                    width: "40px",
                    height: "8px",
                    backgroundColor: "white",
                  }}
                ></span>
              </div>
            </div>
            {navBurger && (
              <div className="burgerMenuItems">
                <NavItem to={"/"} />
                <NavItem to={"make-reservation"} label="Reservation" />

                {!storageToken ? (
                  <>
                    <NavItem
                      label="Sign Up"
                      onClick={() => {
                        setFormType("signup");
                        setShowForm(true);
                      }}
                    />
                    <NavItem
                      label="Login"
                      onClick={() => {
                        setFormType("login");
                        setShowForm(true);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <NavItem label="Logout" onClick={logout} />
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {showForm && <AuthForm formType={formType} setShowForm={setShowForm} />}
    </>
  );
};

export default NavBar;
