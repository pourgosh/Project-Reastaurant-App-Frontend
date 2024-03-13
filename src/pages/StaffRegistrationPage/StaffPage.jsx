import StaffRegistration from "../../components/StaffList/StaffForms/StaffRegistration";
import LoginStaffForm from "../../components/StaffList/StaffForms/LoginStaffForm";
import { useState } from "react";

const StaffPage = () => {
  const [displayForm, setDisplayForm] = useState(null);

  return (
    <div>
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
