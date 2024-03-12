import PublicFoodList from "../../components/PublicFoodList/PublicFoodList";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../ApiUrl";
import "./burgersSteak.css";

const BurgersSteakPage = () => {
  const [foodList, setFoodList] = useState(null);

  const getFoodsFromDb = async () => {
    try {
      const result = await axios.get(`${API_URL}/food`);
      setFoodList(
        result.data.filter((elem) => {
          if (elem.category === "Steak" || elem.category === "Burger") {
            return elem;
          }
        })
      );
      console.log("nothing");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFoodsFromDb();
  }, []);
  return (
    <div>
      <div className="grillPageTitle">
        <p>BurgersSteakPage</p>
      </div>
      <PublicFoodList foodList={foodList && foodList} />
    </div>
  );
};

export default BurgersSteakPage;
