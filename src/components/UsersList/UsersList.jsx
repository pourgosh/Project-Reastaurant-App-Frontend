const UsersList = ({ usersList, deleteUsersonClick }) => {
  return (
    <div className="usersWrapperWrapper">
      <div className="usersTitleContainer">
        <p>List of users</p>
      </div>
      <div className="usersWrapper">
        {usersList &&
          usersList.map((elem) => {
            return (
              <div key={elem._id} className="usersInfoContainer">
                <p>first name: {elem.firstName}</p>
                <p>last name: {elem.lastName}</p>
                <p>E-mail: {elem.email}</p>
                <p>createdAt: {elem.createdAt}</p>
                <p>userID: {elem._id}</p>
                {elem.reservations &&
                  elem.reservations.map((elem) => {
                    return (
                      <>
                        <p>{elem.reserver}</p>
                        {elem.time && <p>{elem.time}</p>}
                        {elem.totalClients && <p>{elem.totalClients}</p>}
                        {elem.date && <p>{elem.date}</p>}
                      </>
                    );
                  })}
                <div>
                  <div
                    onClick={() => {
                      deleteUsersonClick(elem);
                    }}
                  >
                    <p>delete</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UsersList;
