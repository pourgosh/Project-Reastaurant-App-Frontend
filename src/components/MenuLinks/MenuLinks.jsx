import "./menuLinks.css";
import bbqImg from "../../assets/Images/steakThree.jpg";
import vegImg from "../../assets/Images/vegFood.jpg";
import fingerFoodImg from "../../assets/Images/fingerFood.jpg";
import drinkDesertImg from "../../assets/Images/coctailTwo.jpg";
import { useNavigate } from "react-router-dom";

const MenuLinks = () => {
  const navigate = useNavigate();

  return (
    <div className="menuWrapper">
      <section className="menuTitleContainer">
        <p>Our Menu</p>
      </section>
      <div className="menuContainer">
        <div className="grillItemsWrapper">
          <p
            onClick={() => {
              navigate("/burgers&steaks");
            }}
          >
            Steak & Burgers
          </p>
          <div
            style={{
              backgroundImage: `url(${bbqImg})`,
              border: " 10px solid #2c2828",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => {
              navigate("/burgers&steaks");
            }}
          ></div>
        </div>
        <div className="itemImgWrapper">
          <p
            onClick={() => {
              navigate("/vegetarian");
            }}
          >
            Vegetarian
          </p>
          <div
            style={{
              backgroundImage: `url(${vegImg})`,
              border: " 10px solid #2c2828",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => {
              navigate("/vegetarian");
            }}
          ></div>
        </div>
        <div className="itemImgWrapper">
          <p
            onClick={() => {
              navigate("/fingerfood");
            }}
          >
            Finger Food
          </p>
          <div
            style={{
              backgroundImage: `url(${fingerFoodImg})`,
              border: " 10px solid #2c2828",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => {
              navigate("/fingerfood");
            }}
          ></div>
        </div>
        <div className="itemImgWrapper">
          <p
            onClick={() => {
              navigate("/coctails&drinks");
            }}
          >
            And more...
          </p>
          <div
            onClick={() => {
              navigate("/coctails&drinks");
            }}
            style={{
              backgroundImage: `url(${drinkDesertImg})`,
              border: " 10px solid #2c2828",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MenuLinks;
