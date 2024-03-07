import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import Form from "../Form/Form";

const NavBar = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("");
  return (
    <>
      <div className="navbar">
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
          onClick={() => {
            setShowForm(true);
            setFormType("signup");
          }}
        >
          <p>Sign up</p>
        </section>
      </div>
      {showForm && <Form formType={formType} setShowForm={setShowForm} />}
    </>
  );
};

export default NavBar;
