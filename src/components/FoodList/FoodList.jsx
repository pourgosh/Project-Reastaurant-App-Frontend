import EditFoodListForm from "./FoodListForm/EditFoodListForm";
import FoodListForm from "./FoodListForm/FoodListForm";
import { useState } from "react";
import "./foodList.css";

const FoodList = ({
  foodList,
  deleteFoodOnClick,
  WrapperWrapperClassName,
  wrapperClassName,
  imageContainer,
  infoTextContainer,
}) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [elemToShow, setElemToShow] = useState(null);

  const parameter = window.location.pathname;

  const formControler = () => {
    setShowCreateForm(!showCreateForm);
  };
  const editFormControler = (elemId) => {
    setElemToShow(elemId);
  };

  return (
    <div
      style={{ margin: "10px" }}
      className={WrapperWrapperClassName && WrapperWrapperClassName}
    >
      {parameter === "/admin/control" && (
        <div style={{ margin: "10px" }}>
          <p onClick={formControler}>Create new Food</p>
        </div>
      )}
      {showCreateForm && (
        <FoodListForm requestType="post" foodList={foodList} />
      )}
      {foodList &&
        foodList.map((elem) => {
          return (
            <div
              key={elem._id}
              style={{ margin: "10px" }}
              className={wrapperClassName && wrapperClassName}
            >
              <p> {elem.title}</p>
              {elem.image && (
                <div className={imageContainer && imageContainer}>
                  <img src={elem.image} alt="item image" />
                </div>
              )}
              <div className={infoTextContainer && infoTextContainer}>
                {elem.description && <p>description: {elem.description}</p>}
                {elem.origin && <p>origin: {elem.origin}</p>}
                {elem.ingredients && <p>ingredients: {elem.ingredients}</p>}
                {elem.chefsRecommendations && (
                  <p>chefsRecommendations: {elem.chefsRecommendations}</p>
                )}
                {elem.category && <p>category: {elem.category}</p>}
                <p>{elem.price}$</p>
              </div>
              {parameter === "/admin/control" && (
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
              )}
              {elemToShow === elem._id && (
                <EditFoodListForm
                  requestType="put"
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
