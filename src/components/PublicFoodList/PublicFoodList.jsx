import { useNavigate } from "react-router-dom";

const PublicFoodList = ({ foodList }) => {
  const navigate = useNavigate();

  return (
    <div className="foodListMain">
      {foodList &&
        foodList.map((elem) => {
          return (
            <div key={elem._id} className="foodsContainer">
              <p> {elem.title}</p>
              {elem.image && (
                <div
                  className="imgContainer"
                  onClick={() => {
                    navigate(`/foods/${elem._id}`);
                  }}
                >
                  <img src={elem.image} alt="item image" />
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default PublicFoodList;
