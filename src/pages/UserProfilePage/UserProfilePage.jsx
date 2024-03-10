import axios from "axios";
import { useCookies } from "react-cookie";
import { API_URL } from "../../../ApiUrl";
import { useEffect, useState } from "react";

const UserProfilePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookie, _] = useCookies("access_id");
  // eslint-disable-next-line no-unused-vars
  const [tokenCookie, setTokenCookie] = useCookies("access_token");
  const accessID = cookie.access_id;
  const [userInfo, setUserInfo] = useState(null);

  const getUserInfo = async () => {
    try {
      const result = await axios.get(`${API_URL}/users/${accessID}`, {
        headers: { token: tokenCookie.access_token },
      });

      setUserInfo(result.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>{!userInfo ? <h1>Profile Not Found!</h1> : <p>{userInfo.firstName}</p>}</>
  );
};

export default UserProfilePage;
