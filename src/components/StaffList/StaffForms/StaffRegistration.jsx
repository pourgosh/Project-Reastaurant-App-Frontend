import axios from "axios";
import FormInput from "../../AuthForm/FormInput/FormInput";
import { useState, useContext } from "react";
import { staffContext } from "../../../pages/AdminPage/AdminPage";
import { API_URL } from "../../../../ApiUrl";
import "../staffRegistration.css";
const StaffRegistration = ({ setShowRegistration }) => {
  const getStaffFromDb = useContext(staffContext);

  const [newStaff, setNewStaff] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    age: "",
    position: "",
  });

  const signupOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const newStaffInfo = {
        firstName: newStaff.firstName,
        lastName: newStaff.lastName,
        email: newStaff.email,
        password: newStaff.password,
        phoneNumber: newStaff.phoneNumber,
        age: newStaff.age,
        position: newStaff.position,
      };
      await axios.post(`${API_URL}/staff/register`, newStaffInfo);
      setShowRegistration(false);
      getStaffFromDb();
    } catch (err) {
      console.log(err);
    }
  };

  const onClick = () => {
    setShowRegistration(false);
  };
  return (
    <div>
      {window.location.pathname === "/admin/control" && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "2rem",
          }}
        >
          <p onClick={onClick}>Close</p>
        </div>
      )}

      <form onSubmit={signupOnSubmit} className="staffRegistration">
        <FormInput
          inputText="First-Name"
          inputType="text"
          inputValue={newStaff.firstName}
          onChange={(e) => {
            setNewStaff({
              ...newStaff,
              firstName: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Last-Name"
          inputType="text"
          inputValue={newStaff.lastName}
          onChange={(e) => {
            setNewStaff({
              ...newStaff,
              lastName: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="E-mail"
          inputType="text"
          inputValue={newStaff.email}
          onChange={(e) => {
            setNewStaff({
              ...newStaff,
              email: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Password"
          inputType="password"
          inputValue={newStaff.password}
          onChange={(e) => {
            setNewStaff({
              ...newStaff,
              password: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Phone-Number"
          inputType="text"
          inputValue={newStaff.phoneNumber}
          onChange={(e) => {
            setNewStaff({
              ...newStaff,
              phoneNumber: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Age"
          inputType="number"
          inputValue={newStaff.age}
          onChange={(e) => {
            setNewStaff({
              ...newStaff,
              age: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Owner"
          inputName="position"
          inputType="radio"
          inputValue="Owner"
          onChange={(e) => {
            setNewStaff({
              ...newStaff,
              position: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Developer"
          inputName="position"
          inputType="radio"
          inputValue="Developer"
          onChange={(e) => {
            setNewStaff({
              ...newStaff,
              position: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Staff"
          inputName="position"
          inputType="radio"
          inputValue="Staff"
          onChange={(e) => {
            setNewStaff({
              ...newStaff,
              position: e.target.value,
            });
          }}
        />
        <button>Submit New Staff</button>
      </form>
    </div>
  );
};

export default StaffRegistration;
