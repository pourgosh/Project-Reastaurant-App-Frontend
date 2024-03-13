const PublicFoodList = ({ foodList }) => {
  return (
    <div className="foodListMain">
      {foodList &&
        foodList.map((elem) => {
          return (
            <div key={elem._id} className="foodsContainer">
              <p> {elem.title}</p>
              {elem.image && (
                <div className="imgContainer">
                  <img src={elem.image} alt="item image" />
                </div>
              )}
              <div className="foodDetailsContainer">
                {elem.description && <p>description: {elem.description}</p>}
                {elem.origin && <p>origin: {elem.origin}</p>}
                {elem.ingredients && <p>ingredients: {elem.ingredients}</p>}
                {elem.chefsRecommendations && (
                  <p>chefsRecommendations: {elem.chefsRecommendations}</p>
                )}
                {elem.category && <p>category: {elem.category}</p>}
                <p>Price:{elem.price}$</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PublicFoodList;
