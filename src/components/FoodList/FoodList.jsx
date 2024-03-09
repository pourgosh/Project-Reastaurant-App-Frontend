import EditFoodListForm from "./FoodListForm/EditFoodListForm";
import FoodListForm from "./FoodListForm/FoodListForm";
import { useState } from "react";

const FoodList = ({ foodList, deleteFoodOnClick }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [elemToShow, setElemToShow] = useState(null);

  const formControler = () => {
    setShowCreateForm(!showCreateForm);
  };
  const editFormControler = (elemId) => {
    setElemToShow(elemId);
  };

  return (
    <div style={{ margin: "10px" }}>
      <div style={{ margin: "10px" }}>
        <p onClick={formControler}>Create new Food</p>
      </div>
      {showCreateForm && (
        <FoodListForm requestType="post" foodList={foodList} />
      )}
      {foodList &&
        foodList.map((elem) => {
          return (
            <div key={elem._id} style={{ margin: "10px" }}>
              <p>title: {elem.title}</p>
              {elem.description && <p>description: {elem.description}</p>}
              {elem.origin && <p>origin: {elem.origin}</p>}
              {elem.ingredients && <p>ingredients: {elem.ingredients}</p>}
              {elem.image && (
                <div>
                  <p>image:</p>
                  <img src={elem.image} alt="item image" />
                </div>
              )}
              {elem.chefsRecommendations && (
                <p>chefsRecommendations: {elem.chefsRecommendations}</p>
              )}
              {elem.category && <p>category: {elem.category}</p>}
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
                      editFormControler(elem._id);
                    }}
                  >
                    Update Food
                  </p>
                </div>
              </div>
              {elemToShow === elem._id && (
                <EditFoodListForm
                  requestType="put"
                  foodList={foodList}
                  elem={elem}
                  setElemToShow={setElemToShow}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default FoodList;
