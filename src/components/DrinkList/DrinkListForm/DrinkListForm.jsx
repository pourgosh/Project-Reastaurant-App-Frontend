import axios from "axios";
import FormInput from "../../AuthForm/FormInput/FormInput";
import { API_URL } from "../../../../ApiUrl";
import { useCookies } from "react-cookie";
import { useContext, useState } from "react";
import { drinkContext } from "../../../pages/AdminPage/AdminPage";

// eslint-disable-next-line no-unused-vars
const DrinkListForm = ({ requestType, className, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, _] = useCookies("access_token");

  const getDrinksFunction = useContext(drinkContext);

  const [drinkInfo, setdrinkInfo] = useState({
    title: "",
    origin: "",
    image: "",
    type: "",
    category: "",
    price: 0,
  });

  const staffID = localStorage.getItem("staffID");

  const createDrinkItem = async (e) => {
    e.preventDefault();
    try {
      const newDrinkItem = {
        title: drinkInfo.title,
        origin: drinkInfo.origin,
        image: drinkInfo.image,
        type: drinkInfo.type,
        category: drinkInfo.category,
        price: drinkInfo.price,
      };
      await axios.post(`${API_URL}/drink`, newDrinkItem, {
        headers: { token: staffID },
      });
      getDrinksFunction();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form
        onSubmit={createDrinkItem}
        type={requestType && requestType}
        className={className && className}
      >
        <FormInput
          inputText="title"
          required="required"
          inputType="text"
          inputValue={drinkInfo.title}
          onChange={(e) => {
            setdrinkInfo({
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
            setdrinkInfo({
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
            setdrinkInfo({
              ...drinkInfo,
              image: e.target.value,
            });
          }}
        />
        <p>category</p>
        <FormInput
          inputText="Hot"
          inputType="radio"
          inputName="type"
          inputValue="Hot"
          onChange={(e) => {
            setdrinkInfo({
              ...drinkInfo,
              type: e.target.value,
            });
            console.log(drinkInfo.category);
          }}
        />
        <FormInput
          inputText="Cold"
          inputType="radio"
          inputValue="Cold"
          inputName="type"
          onChange={(e) => {
            setdrinkInfo({
              ...drinkInfo,
              type: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Alcoholic"
          inputType="radio"
          inputValue="Alcoholic"
          inputName="category"
          onChange={(e) => {
            setdrinkInfo({
              ...drinkInfo,
              category: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="non-Alcoholic"
          inputName="category"
          inputType="radio"
          inputValue="non-Alcoholic"
          onChange={(e) => {
            setdrinkInfo({
              ...drinkInfo,
              category: e.target.value,
            });
          }}
        />
        <br />
        <FormInput
          inputText="price"
          inputType="number"
          inputValue={drinkInfo.price}
          required="required"
          onChange={(e) => {
            setdrinkInfo({
              ...drinkInfo,
              price: e.target.value,
            });
          }}
        />
        <div>
          <div>
            <button type="submit">submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default DrinkListForm;
