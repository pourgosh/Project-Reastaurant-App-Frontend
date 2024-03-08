import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import Form from "../Form/Form";
import logo from "../../assets/Images/logo.png";
import signupBg from "../../assets/Images/signupBg.png";

const NavBar = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("");
  return (
    <>
      <div className="navbarWrapper">
        <div className="navbarImgContainer">
          <img src={logo} />
        </div>
        <div className="navbarLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
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
      {showForm && <Form formType={formType} setShowForm={setShowForm} />}
    </>
  );
};

export default NavBar;
