import UsersList from "../../components/UsersList/UsersList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { API_URL } from "../../../ApiUrl";

const AdminPage = () => {
  const [usersList, setUsersList] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [cookies, _] = useCookies(["access_token"]);

  const getUsersFromDb = async () => {
    try {
      const result = await axios.get(`${API_URL}/users`, {
        headers: { token: cookies.access_token },
      });
      setUsersList(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUsersFromDb();
  }, []);

  const onClick = async (elem) => {
    try {
      await axios.delete(`${API_URL}/users/${elem._id}`, {
        headers: { token: cookies.access_token },
      });
      getUsersFromDb();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <UsersList
        usersList={usersList}
        setUsersList={setUsersList}
        onClick={onClick}
      />
    </div>
  );
};

export default AdminPage;
