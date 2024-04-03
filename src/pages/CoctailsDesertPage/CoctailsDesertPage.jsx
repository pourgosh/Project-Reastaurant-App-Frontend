import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../ApiUrl";
import PublicFoodList from "../../components/PublicFoodList/PublicFoodList";
import "./coctailsDesertPage.css";

const FingerFoodPage = () => {
  const [foodList, setFoodList] = useState(null);

  const getFoodsFromDb = async () => {
    try {
      const result = await axios.get(`${API_URL}/food`);
      setFoodList(
        result.data.filter((elem) => {
          if (elem.category === "Desert") {
            return elem;
          }
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFoodsFromDb();
  }, []);

  return (
    <div>
      <div className="sideDishTitleContainer">
        <p>Our Deserts & Drinks Menu</p>
      </div>
      <PublicFoodList foodList={foodList} />
    </div>
  );
};

export default FingerFoodPage;
