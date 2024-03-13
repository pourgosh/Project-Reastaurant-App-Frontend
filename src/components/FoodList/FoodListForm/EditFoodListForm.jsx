import { useEffect, useState, useContext } from "react";
import axios from "axios";
import FormInput from "../../AuthForm/FormInput/FormInput";
import { API_URL } from "../../../../ApiUrl";
import { useCookies } from "react-cookie";
import { foodContext } from "../../../pages/AdminPage/AdminPage";

const EditFoodListForm = ({ requestType, elem, setElemToShow }) => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, _] = useCookies("access_token");

  const getFoodsFromDb = useContext(foodContext);

  const closeEditForm = () => {
    setElemToShow(null);
  };
  const [foodInfo, setFoodInfo] = useState({
    _id: "",
    title: "",
    description: "",
    ingredients: "",
    origin: "",
    image: "",
    chefsRecommendations: "",
    category: "",
    price: 0,
  });

  const getFoodItemById = async () => {
    try {
      const elemID = elem._id;
      const response = await axios.get(`${API_URL}/food/${elemID}`);
      setFoodInfo({
        _id: response.data._id,
        title: response.data.title,
        description: response.data.description,
        ingredients: response.data.ingredients,
        origin: response.data.origin,
        image: response.data.image,
        chefsRecommendations: response.data.chefsRecommendations,
        category: response.data.category,
        price: response.data.price,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const staffID = localStorage.getItem("staffID");

  useEffect(() => {
    getFoodItemById();
  }, []);

  const updateOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const elemID = foodInfo._id;
      const newFoodInfo = {
        _id: foodInfo._id,
        title: foodInfo.title,
        description: foodInfo.description,
        ingredients: foodInfo.ingredients,
        origin: foodInfo.origin,
        image: foodInfo.image,
        chefsRecommendations: foodInfo.chefsRecommendations,
        category: foodInfo.category,
        price: foodInfo.price,
      };
      await axios.put(`${API_URL}/food/${elemID}`, newFoodInfo, {
        headers: { token: staffID },
      });
      getFoodsFromDb();
      closeEditForm();
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
          updateOnSubmit();
        }}
      >
        <FormInput
          inputText="title"
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
          inputText="chefsRecommendations"
          inputType="text"
          inputValue={foodInfo.chefsRecommendations}
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
              chefsRecommendations: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Vegetarian"
          inputType="radio"
          checked={foodInfo.category === "Vegetarian" && "checked"}
          inputName="category"
          inputValue="Vegetarian"
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
              category: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Steak"
          inputType="radio"
          checked={foodInfo.category === "Steak" && "checked"}
          inputName="category"
          inputValue="Steak"
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
          checked={foodInfo.category === "Burger" && "checked"}
          inputName="category"
          inputValue="Burger"
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
              category: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Finger-food"
          inputType="radio"
          checked={foodInfo.category === "Finger-food" && "checked"}
          inputName="category"
          inputValue="Finger-food"
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
              category: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Desert"
          inputType="radio"
          checked={foodInfo.category === "Desert" && "checked"}
          inputName="category"
          inputValue="Desert"
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
              category: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="price"
          inputType="text"
          inputValue={foodInfo.price}
          onChange={(e) => {
            setFoodInfo({
              ...foodInfo,
              price: e.target.value,
            });
          }}
        />
        <div>
          <p onClick={updateOnSubmit}>submit update</p>
        </div>
      </form>
      <div>
        <p onClick={closeEditForm}>cancel</p>
      </div>
    </div>
  );
};

export default EditFoodListForm;
