import FoodList from "../../components/FoodList/FoodList";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../ApiUrl";

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
      BurgersSteakPage
      <FoodList
        foodList={foodList && foodList}
        WrapperWrapperClassName="foodWrapperWrapper"
        wrapperClassName="foodItemWrapper"
        imageContainer="foodImgContainer"
        infoTextContainer="foodInfoTxtContainer"
      />
    </div>
  );
};

export default BurgersSteakPage;
