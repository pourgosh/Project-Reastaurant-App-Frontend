import axios from "axios";
import FormInput from "../../AuthForm/FormInput/FormInput";
import { API_URL } from "../../../../ApiUrl";
import { useCookies } from "react-cookie";
import { useContext, useState } from "react";
import { foodContext } from "../../../pages/AdminPage/AdminPage";

// eslint-disable-next-line no-unused-vars
const FoodListForm = ({ requestType, className, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, _] = useCookies("access_token");
  const getFoodsFunction = useContext(foodContext);
  const [foodInfo, setFoodInfo] = useState({
    title: "",
    description: "",
    ingredients: "",
    origin: "",
    image: "",
    chefsRecommendations: "",
    category: "",
    price: 0,
  });

  const createFoodItem = async () => {
    try {
      const newFoodItem = {
        title: foodInfo.title,
        description: foodInfo.description,
        ingredients: [foodInfo.ingredients],
        origin: foodInfo.origin,
        image: foodInfo.image,
        chefsRecommendations: foodInfo.chefsRecommendations,
        category: foodInfo.category,
        price: foodInfo.price,
      };
      await axios.post(`${API_URL}/food`, newFoodItem, {
        headers: { token: cookies.access_token },
      });
      getFoodsFunction();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form
        onSubmit={createFoodItem}
        type={requestType && requestType}
        className={className && className}
      >
        <FormInput
          inputText="title"
          required="required"
          inputType="text"
          inputValue={foodInfo.title}
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
              title: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="description"
          inputType="text"
          inputValue={foodInfo.description}
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
              description: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="ingredients"
          inputType="text"
          inputValue={foodInfo.ingredients}
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
              ingredients: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="origin"
          inputType="text"
          inputValue={foodInfo.origin}
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
              origin: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="image"
          inputType="text"
          inputValue={foodInfo.image}
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
              image: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="chefs Recommendations"
          inputType="text"
          inputValue={foodInfo.chefsRecommendations}
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
              chefsRecommendations: e.target.value,
            });
          }}
        />
        <p>category</p>
        <FormInput
          inputText="Vegetarian"
          inputType="radio"
          inputName="category"
          inputValue="Vegetarian"
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
              category: e.target.value,
            });
            console.log(foodInfo.category);
          }}
        />
        <FormInput
          inputText="Steak"
          inputType="radio"
          inputValue="Steak"
          inputName="category"
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
              category: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Burger"
          inputType="radio"
          inputValue="Burger"
          inputName="category"
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
              category: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Finger-food"
          inputName="category"
          inputType="radio"
          inputValue="Finger-food"
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
              category: e.target.value,
            });
          }}
        />
        <FormInput
          inputName="category"
          inputText="Desert"
          inputType="radio"
          inputValue="Desert"
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
              category: e.target.value,
            });
          }}
        />
        <br />
        <FormInput
          inputText="price"
          inputType="number"
          inputValue={foodInfo.price}
          required="required"
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
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

export default FoodListForm;
