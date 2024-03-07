import { useRef } from "react";
import FormInput from "./FormInput/FormInput";

const Form = ({ formType }) => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <>
      {formType === "signup" ? (
        <div style={{ backgroundColor: "red", height: "20vh" }}>
          <form type="post">
            <FormInput
              refName={firstNameRef}
              inputName="firstName"
              inputText="First Name"
            />
            <FormInput
              refName={lastNameRef}
              inputName="LastName"
              inputText="Last Name"
            />
            <FormInput
              refName={emailRef}
              inputName="email"
              inputText="E-mail"
            />
            <FormInput
              refName={passwordRef}
              inputName="password"
              inputText="Password"
            />
          </form>
        </div>
      ) : formType === "login" ? (
        <div style={{ backgroundColor: "red", height: "20vh" }}>
          <form type="post">
            <FormInput
              refName={emailRef}
              inputName="email"
              inputText="E-mail"
            />
            <FormInput
              refName={passwordRef}
              inputName="password"
              inputText="Password"
            />
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Form;
