import { useEffect, useState, useContext } from "react";
import axios from "axios";
import FormInput from "../../AuthForm/FormInput/FormInput";
import { API_URL } from "../../../../ApiUrl";
import { useCookies } from "react-cookie";
import { staffContext } from "../../../pages/AdminPage/AdminPage";

const EditStaffForm = ({ requestType, elem, setElemToShow }) => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, _] = useCookies("access_token");

  const getStaffFromDb = useContext(staffContext);

  const closeEditForm = () => {
    setElemToShow(null);
  };
  const [staffInfo, setStaffInfo] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    age: "",
    position: "",
  });

  const getStaffById = async () => {
    try {
      const elemID = elem._id;
      const response = await axios.get(`${API_URL}/staff/${elemID}`, {
        headers: { token: cookies.access_token },
      });
      setStaffInfo({
        _id: response.data._id,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        phoneNumber: response.data.phoneNumber,
        age: response.data.age,
        position: response.data.position,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getStaffById();
  }, []);

  const updateOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const elemID = staffInfo._id;
      const newStaffInfo = {
        _id: staffInfo._id,
        firstName: staffInfo.firstName,
        lastName: staffInfo.lastName,
        email: staffInfo.email,
        phoneNumber: staffInfo.phoneNumber,
        age: staffInfo.age,
        position: staffInfo.position,
      };
      await axios.put(`${API_URL}/staff/${elemID}`, newStaffInfo, {
        headers: { token: cookies.access_token },
      });
      getStaffFromDb();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ margin: "10px" }}>
      <h1>EDIT MEMBER</h1>
      <form
        type={requestType}
        onSubmit={() => {
          updateOnSubmit();
        }}
      >
        <FormInput
          inputText="first name"
          inputType="text"
          inputValue={staffInfo.firstName}
          onChange={(e) => {
            setStaffInfo({
              ...staffInfo,
              firstName: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="last name"
          inputType="text"
          inputValue={staffInfo.lastName}
          onChange={(e) => {
            setStaffInfo({
              ...staffInfo,
              lastName: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="E-mail"
          inputType="text"
          inputValue={staffInfo.email}
          onChange={(e) => {
            setStaffInfo({
              ...staffInfo,
              email: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="phone number"
          inputType="text"
          inputValue={staffInfo.phoneNumber}
          onChange={(e) => {
            setStaffInfo({
              ...staffInfo,
              phoneNumber: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="age"
          inputType="number"
          inputValue={staffInfo.age}
          onChange={(e) => {
            setStaffInfo({
              ...staffInfo,
              age: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Owner"
          inputType="radio"
          inputValue="Owner"
          checked={staffInfo.position === "Owner" && "checked"}
          inputName="position"
          onChange={(e) => {
            setStaffInfo({
              ...staffInfo,
              position: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Developer"
          inputType="radio"
          inputValue="Developer"
          checked={staffInfo.position === "Developer" && "checked"}
          inputName="position"
          onChange={(e) => {
            setStaffInfo({
              ...staffInfo,
              position: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Staff"
          inputType="radio"
          inputValue="Staff"
          checked={staffInfo.position === "Staff" && "checked"}
          inputName="position"
          onChange={(e) => {
            setStaffInfo({
              ...staffInfo,
              position: e.target.value,
            });
          }}
        />
        <div>
          <p onClick={updateOnSubmit}>submit update</p>
        </div>
      </form>
      <div>
        <p onClick={closeEditForm}>cancel</p>
      </div>
    </div>
  );
};

export default EditStaffForm;
