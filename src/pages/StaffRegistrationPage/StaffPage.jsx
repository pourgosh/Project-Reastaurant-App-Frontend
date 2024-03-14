import StaffRegistration from "../../components/StaffList/StaffForms/StaffRegistration";
import LoginStaffForm from "../../components/StaffList/StaffForms/LoginStaffForm";
import { useState } from "react";
import "./staffPage.css";

const StaffPage = () => {
  const [displayForm, setDisplayForm] = useState("signUp");

  return (
    <div className="registrationWrapper">
      <div>
        <div>
          <p
            onClick={() => {
              setDisplayForm("signUp");
            }}
          >
            Register as a new Member
          </p>
        </div>
        <div>
          <p
            onClick={() => {
              setDisplayForm("login");
            }}
          >
            Sign in to staff account
          </p>
        </div>
      </div>
      {displayForm === "signUp" ? (
        <div>
          <StaffRegistration />
          <p
            onClick={() => {
              setDisplayForm(null);
            }}
          >
            close form
          </p>
        </div>
      ) : displayForm === "login" ? (
        <div>
          <LoginStaffForm />
          <p
            onClick={() => {
              setDisplayForm(null);
            }}
          >
            close form
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default StaffPage;
