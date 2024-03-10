import { useContext, useEffect, useState } from "react";
import axios from "axios";
import FormInput from "../../AuthForm/FormInput/FormInput";
import { API_URL } from "../../../../ApiUrl";
import { useCookies } from "react-cookie";
import { drinkContext } from "../../../pages/AdminPage/AdminPage";

const EditDrinkListForm = ({ requestType, elem, setElemToShow }) => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, _] = useCookies("access_token");
  const getDrinksFromDb = useContext(drinkContext);
  const closeDrinkEditForm = () => {
    setElemToShow(false);
  };
  const [drinkInfo, setDrinkInfo] = useState({
    _id: "",
    title: "",
    type: "",
    origin: "",
    image: "",
    category: "",
    price: 0,
  });

  const getDrinkItemById = async () => {
    try {
      const elemID = elem._id;
      const response = await axios.get(`${API_URL}/drink/${elemID}`);
      setDrinkInfo({
        _id: response.data._id,
        title: response.data.title,
        type: response.data.type,
        origin: response.data.origin,
        image: response.data.image,
        category: response.data.category,
        price: response.data.price,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDrinkItemById();
  }, []);

  const updateDrinkOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const elemID = drinkInfo._id;
      const newDrinkInfo = {
        _id: drinkInfo._id,
        title: drinkInfo.title,
        type: drinkInfo.type,
        origin: drinkInfo.origin,
        image: drinkInfo.image,
        category: drinkInfo.category,
        price: drinkInfo.price,
      };
      await axios.put(`${API_URL}/drink/${elemID}`, newDrinkInfo, {
        headers: cookies.access_token,
      });
      closeDrinkEditForm();
      getDrinksFromDb();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>EDIT ITEM</h1>
      <form
        type={requestType}
        onSubmit={() => {
          updateDrinkOnSubmit();
        }}
      >
        <FormInput
          inputText="title"
          inputType="text"
          inputValue={drinkInfo.title}
          onChange={(e) => {
            setDrinkInfo({
              ...drinkInfo,
              title: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="origin"
          inputType="text"
          inputValue={drinkInfo.origin}
          onChange={(e) => {
            setDrinkInfo({
              ...drinkInfo,
              origin: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="image"
          inputType="text"
          inputValue={drinkInfo.image}
          onChange={(e) => {
            setDrinkInfo({
              ...drinkInfo,
              image: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Hot"
          inputType="radio"
          checked={drinkInfo.type === "Hot" && "checked"}
          inputName="type"
          inputValue="Hot"
          onChange={(e) => {
            setDrinkInfo({
              ...drinkInfo,
              type: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Cold"
          inputType="radio"
          checked={drinkInfo.type === "Cold" && "checked"}
          inputName="type"
          inputValue="Cold"
          onChange={(e) => {
            setDrinkInfo({
              ...drinkInfo,
              type: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Alcoholic"
          inputType="radio"
          checked={drinkInfo.category === "Alcoholic" && "checked"}
          inputName="category"
          inputValue="Alcoholic"
          onChange={(e) => {
            setDrinkInfo({
              ...drinkInfo,
              category: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="non-Alcoholic"
          inputType="radio"
          checked={drinkInfo.category === "non-Alcoholic" && "checked"}
          inputName="category"
          inputValue="non-Alcoholic"
          onChange={(e) => {
            setDrinkInfo({
              ...drinkInfo,
              category: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="price"
          inputType="text"
          inputValue={drinkInfo.price}
          onChange={(e) => {
            setDrinkInfo({
              ...drinkInfo,
              price: e.target.value,
            });
          }}
        />
        <div>
          <p onClick={updateDrinkOnSubmit}>submit update</p>
        </div>
      </form>
      <div>
        <p onClick={closeDrinkEditForm}>cancel</p>
      </div>
    </div>
  );
};

export default EditDrinkListForm;
