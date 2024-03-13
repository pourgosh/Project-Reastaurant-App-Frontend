import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../ApiUrl";
import FormInput from "../AuthForm/FormInput/FormInput";

const UpdateUserInfo = ({ userInfo, getUserInfo }) => {
  const [userData, setUserData] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    age: userInfo.age || 21,
    email: userInfo.email,
    phoneNumber: userInfo.phoneNumber || "",
    description: userInfo.description || "",
    avatar: userInfo.avatar || "",
  });
  const userID = localStorage.getItem("userID");
  const profileID = localStorage.getItem("profileID");
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const newInfo = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        age: userData.age,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        description: userData.description,
        avatar: userData.avatar,
      };
      await axios.put(`${API_URL}/users/${profileID}`, newInfo, {
        headers: { token: userID },
      });
      getUserInfo();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={updateUser} className="editUserForm">
        <FormInput
          inputType="text"
          inputValue={userData.firstName}
          inputText="first-name"
          onChange={(e) => {
            setUserData({
              ...userData,
              firstName: e.target.value,
            });
          }}
        />
        <FormInput
          inputType="text"
          inputValue={userData.lastName}
          inputText="lastName"
          onChange={(e) => {
            setUserData({
              ...userData,
              lastName: e.target.value,
            });
          }}
        />
        <FormInput
          inputType="email"
          inputText="E-mail"
          inputValue={userData.email}
          onChange={(e) => {
            setUserData({
              ...userData,
              email: e.target.value,
            });
          }}
        />
        <FormInput
          inputType="number"
          inputText="Age"
          inputValue={userData.age}
          onChange={(e) => {
            setUserData({
              ...userData,
              age: e.target.value,
            });
          }}
        />
        <FormInput
          inputType="text"
          inputText="phone-number"
          inputValue={userData.phoneNumber}
          onChange={(e) => {
            setUserData({
              ...userData,
              phoneNumber: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Description"
          inputType="text"
          inputValue={userData.description}
          onChange={(e) => {
            setUserData({
              ...userData,
              description: e.target.value,
            });
          }}
        />
        <FormInput
          inputType="text"
          inputText="Profile Image"
          inputValue={userData.avatar}
          onChange={(e) => {
            setUserData({
              ...userData,
              avatar: e.target.value,
            });
          }}
        />
        <button>Update Information</button>
      </form>
    </div>
  );
};

export default UpdateUserInfo;
