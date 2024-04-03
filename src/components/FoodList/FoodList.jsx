import EditFoodListForm from "./FoodListForm/EditFoodListForm";
import FoodListForm from "./FoodListForm/FoodListForm";
import { useState } from "react";

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
    <div className={WrapperWrapperClassName && WrapperWrapperClassName}>
      {parameter === "/admin/control" && (
        <div className="createFoodContainer">
          <p onClick={formControler}>Add New Food</p>
        </div>
      )}
      {showCreateForm && (
        <FoodListForm
          requestType="post"
          foodList={foodList}
          className="creatFoodFormContainer"
        />
      )}
      {parameter === "/admin/control" && (
        <div className="listNameContainer">
          <p>Foods List</p>
        </div>
      )}

      <div className="foodListWrapper">
        {foodList &&
          foodList.map((elem) => {
            return (
              <div
                key={elem._id}
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
                  <p>Price:{elem.price}$</p>
                </div>
                {parameter === "/admin/control" && (
                  <div className="foodControlers">
                    <p
                      onClick={() => {
                        deleteFoodOnClick(elem);
                      }}
                    >
                      Delete Food
                    </p>

                    <p
                      onClick={() => {
                        editFormControler(elem._id);
                      }}
                    >
                      Update Food
                    </p>
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
    </div>
  );
};

export default FoodList;
