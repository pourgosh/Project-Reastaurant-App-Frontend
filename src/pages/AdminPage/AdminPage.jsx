import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { API_URL } from "../../../ApiUrl";
import UsersList from "../../components/UsersList/UsersList";
import FoodList from "../../components/FoodList/FoodList";

export const foodContext = createContext();

const AdminPage = () => {
  const [usersList, setUsersList] = useState(null);
  const [foodList, setFoodList] = useState(null);

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

  const getFoodsFromDb = async () => {
    try {
      const result = await axios.get(`${API_URL}/food`, {
        headers: { token: cookies.access_token },
      });
      setFoodList(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUsersFromDb();
    getFoodsFromDb();
  }, []);

  const deleteUsersonClick = async (elem) => {
    try {
      await axios.delete(`${API_URL}/users/${elem._id}`, {
        headers: { token: cookies.access_token },
      });
      getUsersFromDb();
    } catch (err) {
      console.error(err);
    }
  };
  const deleteFoodOnClick = async (elem) => {
    try {
      await axios.delete(`${API_URL}/food/${elem._id}`, {
        headers: { token: cookies.access_token },
      });
      getFoodsFromDb();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <UsersList
        usersList={usersList}
        deleteUsersonClick={deleteUsersonClick}
      />
      <foodContext.Provider value={getFoodsFromDb}>
        <FoodList foodList={foodList} deleteFoodOnClick={deleteFoodOnClick} />
      </foodContext.Provider>
    </div>
  );
};

export default AdminPage;
