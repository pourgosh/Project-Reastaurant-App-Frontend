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
        <div>
          <section className="closeForm" onClick={onClick}>
            <p>X</p>
          </section>
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
        <div>
          <section className="closeForm" onClick={onClick}>
            <p>X</p>
          </section>
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
