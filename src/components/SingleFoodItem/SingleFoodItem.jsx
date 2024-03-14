import axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../ApiUrl";
import { useEffect, useState } from "react";
import "./singleFoodItem.css";

const SingleFoodItem = () => {
  const { id } = useParams();
  const userID = localStorage.getItem("userID");
  const [foodItem, setFoodItem] = useState(null);

  const getFoodData = async () => {
    try {
      const response = await axios.get(`${API_URL}/food/${id}`, {
        headers: { token: userID },
      });
      setFoodItem(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFoodData();
  }, []);
  return (
    <>
      {foodItem && (
        <div className="itemMainWrapper">
          <div className="leftContainer">
            <div className="itemTitle">
              <p>{foodItem.title}</p>
            </div>
            <div className="itemInfoContainer">
              <div className="mainInfoContainer">
                <p>Category</p>
                <p>{foodItem.category}</p>
                {foodItem.ingredients && (
                  <>
                    <p>Ingredients</p>
                    <p>{foodItem.ingredients}</p>
                  </>
                )}
                {foodItem.origin && (
                  <>
                    <p>Origin</p>
                    <p>{foodItem.origin}</p>
                  </>
                )}
                {foodItem.chefsRecommendations && (
                  <>
                    <p>Chefs Recommendations</p>
                    <p>{foodItem.chefsRecommendations}</p>
                  </>
                )}
                {foodItem.chefsRecommendations && (
                  <>
                    <p>Description</p>
                    <p>{foodItem.description}</p>
                  </>
                )}
              </div>
              <div className="priceContainer">
                <p>${foodItem.price}</p>
              </div>
            </div>
          </div>
          <div className="rightContainer">
            {foodItem.image ? (
              <div className="itemImgContainer">
                <img src={foodItem.image} alt="item image" />
              </div>
            ) : (
              <p style={{ fontSize: "4rem" }}>Image Not Found!</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SingleFoodItem;
