import { useRef, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import FormInput from "./FormInput/FormInput";
import { API_URL } from "../../../ApiUrl";
import "./form.css";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ formType, setShowForm }) => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [userLoginInfo, setUserLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [_, setCookies] = useCookies("access_token");
  // eslint-disable-next-line no-unused-vars
  const [cookies, setProfileCookies] = useCookies("profile_id");

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signupOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUserInfo = {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        password: newUser.password,
      };
      await axios.post(`${API_URL}/signup`, newUserInfo);
      setShowForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  const loginOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const UserInfo = {
        email: userLoginInfo.email,
        password: userLoginInfo.password,
      };
      const response = await axios.post(`${API_URL}/login`, UserInfo);
      setCookies("access_token", response.data.token);
      setProfileCookies("access_id", response.data.userId);
      window.localStorage.setItem("userID", response.data.token);
      window.localStorage.setItem("profileID", response.data.userId);
      setShowForm(false);
      navigate("/");
      location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const onClick = () => {
    setShowForm(false);
  };

  return (
    <>
      {formType === "signup" ? (
        <div className="formWrapperWrapper">
          <div className="formWrapper">
            <section className="closeForm">
              <p onClick={onClick}>X</p>
            </section>
            <div className="signupTextContainer">
              <p>Sign Up</p>
            </div>
            <div className="formContainer">
              <form type="post" className="formForm" onSubmit={signupOnSubmit}>
                <FormInput
                  inputClassName={"formInput"}
                  labelClassName={"formLabel"}
                  refName={firstNameRef}
                  inputName="firstName"
                  inputText="First Name"
                  inputValue={newUser.firstName}
                  onChange={(e) => {
                    setNewUser({
                      ...newUser,
                      firstName: e.target.value,
                    });
                  }}
                />
                <FormInput
                  inputClassName={"formInput"}
                  labelClassName={"formLabel"}
                  refName={lastNameRef}
                  inputName="LastName"
                  inputText="Last Name"
                  inputValue={newUser.lastName}
                  onChange={(e) => {
                    setNewUser({
                      ...newUser,
                      lastName: e.target.value,
                    });
                  }}
                />
                <FormInput
                  inputClassName={"formInput"}
                  labelClassName={"formLabel"}
                  refName={emailRef}
                  inputName="email"
                  inputText="E-mail"
                  inputValue={newUser.email}
                  onChange={(e) => {
                    setNewUser({
                      ...newUser,
                      email: e.target.value,
                    });
                  }}
                />
                <FormInput
                  inputClassName={"formInput"}
                  labelClassName={"formLabel"}
                  refName={passwordRef}
                  inputName="password"
                  inputText="Password"
                  inputType="password"
                  inputValue={newUser.password}
                  onChange={(e) => {
                    setNewUser({
                      ...newUser,
                      password: e.target.value,
                    });
                  }}
                />
                <button className="formSubmitBtn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : formType === "login" ? (
        <div className="formWrapperWrapper">
          <div className="formWrapper">
            <section className="closeForm">
              <p onClick={onClick}>X</p>
            </section>
            <div className="signupTextContainer">
              <p>Login</p>
            </div>
            <div className="formContainer">
              <form type="post" className="formForm" onSubmit={loginOnSubmit}>
                <FormInput
                  inputClassName={"formInput"}
                  labelClassName={"formLabel"}
                  refName={emailRef}
                  inputName="email"
                  inputText="E-mail"
                  inputValue={userLoginInfo.email}
                  onChange={(e) => {
                    setUserLoginInfo({
                      ...userLoginInfo,
                      email: e.target.value,
                    });
                  }}
                />
                <FormInput
                  inputClassName={"formInput"}
                  labelClassName={"formLabel"}
                  refName={passwordRef}
                  inputName="password"
                  inputText="Password"
                  inputType="password"
                  inputValue={userLoginInfo.password}
                  onChange={(e) => {
                    setUserLoginInfo({
                      ...userLoginInfo,
                      password: e.target.value,
                    });
                  }}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AuthForm;
