import { useState } from "react";
import DrinkListForm from "./DrinkListForm/DrinkListForm";
import EditDrinkListForm from "./DrinkListForm/EditDrinkListForm";

const DrinkList = ({
  drinkList,
  deleteDrinkOnClick,
  WrapperWrapperClassName,
  wrapperClassName,
  imageContainer,
  infoTextContainer,
  itemClassName,
}) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [elemToShow, setElemToShow] = useState(null);

  const parameter = window.location.pathname;

  const formControler = () => {
    setShowCreateForm(!showCreateForm);
    console.log(showCreateForm);
  };
  const editFormControler = (elemId) => {
    setElemToShow(elemId);
  };

  return (
    <div className={WrapperWrapperClassName && WrapperWrapperClassName}>
      {parameter === "/admin/control" && (
        <div className="createDrinkBtn">
          <p onClick={formControler}>Create new Drink</p>
        </div>
      )}
      {showCreateForm && (
        <DrinkListForm
          requestType="post"
          drinkList={drinkList}
          className="createDrinkForm"
        />
      )}
      <div className={wrapperClassName && wrapperClassName}>
        {drinkList &&
          drinkList.map((elem) => {
            return (
              <div key={elem._id} className={itemClassName && itemClassName}>
                <p> {elem.title}</p>
                {elem.image && (
                  <div className={imageContainer && imageContainer}>
                    <img src={elem.image} alt="item image" />
                  </div>
                )}
                <div className={infoTextContainer && infoTextContainer}>
                  {elem.origin && <p>origin: {elem.origin}</p>}
                  {elem.type && <p>type: {elem.type}</p>}
                  {elem.category && <p>category: {elem.category}</p>}
                  <p>{elem.price}$</p>
                </div>
                {parameter === "/admin/control" && (
                  <div className="optionsWrapper">
                    <div className="optionsContainer">
                      <p
                        onClick={() => {
                          deleteDrinkOnClick(elem);
                        }}
                      >
                        Delete Drink
                      </p>
                    </div>

                    <div className="optionsContainer">
                      <p
                        onClick={() => {
                          editFormControler(elem._id);
                        }}
                      >
                        Update Drink
                      </p>
                    </div>
                  </div>
                )}
                {elemToShow === elem._id && (
                  <EditDrinkListForm
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

export default DrinkList;
