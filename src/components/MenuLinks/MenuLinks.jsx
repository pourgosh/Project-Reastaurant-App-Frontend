import "./menuLinks.css";
import bbqImg from "../../assets/Images/steakThree.jpg";
import vegImg from "../../assets/Images/vegFood.jpg";
import fingerFoodImg from "../../assets/Images/fingerFood.jpg";
import drinkDesertImg from "../../assets/Images/coctailTwo.jpg";

const MenuLinks = () => {
  return (
    <div className="menuWrapper">
      <section className="menuTitleContainer">
        <p>Our Menu</p>
      </section>
      <div className="menuContainer">
        <div className="grillItemsWrapper">
          <p>Steak & Burgers</p>
          <div style={{ backgroundImage: `url(${bbqImg})` }}></div>
        </div>
        <div className="itemImgWrapper">
          <p>Vegetarian</p>
          <div style={{ backgroundImage: `url(${vegImg})` }}></div>
        </div>
        <div className="itemImgWrapper">
          <p>Finger Food</p>
          <div style={{ backgroundImage: `url(${fingerFoodImg})` }}></div>
        </div>
        <div className="itemImgWrapper">
          <p>and more...</p>
          <div
            style={{
              backgroundImage: `url(${drinkDesertImg})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MenuLinks;
