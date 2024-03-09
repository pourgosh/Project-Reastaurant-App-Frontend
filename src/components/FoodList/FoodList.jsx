import FoodListForm from "./FoodListForm/FoodListForm";
import { useState } from "react";

const FoodList = ({ foodList, deleteFoodOnClick, updateFoodOnClick }) => {
  const [showForm, setShowForm] = useState(false);

  const formControler = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <div>
        <p onClick={formControler}>Create new Food</p>
      </div>
      {showForm && <FoodListForm requestType="post" />}
      {foodList &&
        foodList.map((elem) => {
          return (
            <div key={elem._id}>
              <p>{elem.title}</p>
              {elem.description && <p>{elem.description}</p>}
              {elem.origin && <p>{elem.origin}</p>}
              {elem.origin && <p>{elem.origin}</p>}
              {elem.image && <img src={elem.image} alt="item image" />}
              {elem.chefsRecommendations && <p>{elem.chefsRecommendations}</p>}
              {elem.category && <p>{elem.category}</p>}
              <p>{elem.price}$</p>
              <div>
                <div>
                  <p
                    onClick={() => {
                      deleteFoodOnClick(elem);
                    }}
                  >
                    Delete Food
                  </p>
                </div>
                <div>
                  <p
                    onClick={() => {
                      updateFoodOnClick(elem);
                      formControler();
                    }}
                  >
                    Update Food
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FoodList;
