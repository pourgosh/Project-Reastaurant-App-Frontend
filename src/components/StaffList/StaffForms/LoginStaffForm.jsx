import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import FormInput from "../../AuthForm/FormInput/FormInput";
import { API_URL } from "../../../../ApiUrl";

const LoginStaffForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setCookies] = useCookies("access_token");
  const [staffInfo, setStaffInfo] = useState({
    email: "",
    password: "",
  });
  const loginOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const staffInformation = {
        email: staffInfo.email,
        password: staffInfo.password,
      };
      const response = await axios.post(
        `${API_URL}/staff/login`,
        staffInformation
      );
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("staffID", response.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p>hello</p>
      <form onSubmit={loginOnSubmit}>
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
          inputText="Password"
          inputType="password"
          inputValue={staffInfo.password}
          onChange={(e) => {
            setStaffInfo({
              ...staffInfo,
              password: e.target.value,
            });
          }}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginStaffForm;
