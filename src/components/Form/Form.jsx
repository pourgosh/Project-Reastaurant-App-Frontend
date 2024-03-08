import { useRef } from "react";
import FormInput from "./FormInput/FormInput";
import "./form.css";

const Form = ({ formType, setShowForm }) => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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
              <form type="post" className="formForm">
                <FormInput
                  inputClassName={"formInput"}
                  labelClassName={"formLabel"}
                  refName={firstNameRef}
                  inputName="firstName"
                  inputText="First Name"
                />
                <FormInput
                  inputClassName={"formInput"}
                  labelClassName={"formLabel"}
                  refName={lastNameRef}
                  inputName="LastName"
                  inputText="Last Name"
                />
                <FormInput
                  inputClassName={"formInput"}
                  labelClassName={"formLabel"}
                  refName={emailRef}
                  inputName="email"
                  inputText="E-mail"
                />
                <FormInput
                  inputClassName={"formInput"}
                  labelClassName={"formLabel"}
                  refName={passwordRef}
                  inputName="password"
                  inputText="Password"
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
              <form type="post" className="formForm">
                <FormInput
                  inputClassName={"formInput"}
                  labelClassName={"formLabel"}
                  refName={emailRef}
                  inputName="email"
                  inputText="E-mail"
                />
                <FormInput
                  inputClassName={"formInput"}
                  labelClassName={"formLabel"}
                  refName={passwordRef}
                  inputName="password"
                  inputText="Password"
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

export default Form;
