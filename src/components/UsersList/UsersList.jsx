const UsersList = ({ usersList, deleteUsersonClick }) => {
  return (
    <div style={{ margin: "10px" }}>
      <div>
        <p>List of users</p>
      </div>
      {usersList &&
        usersList.map((elem) => {
          return (
            <div key={elem._id} style={{ margin: "10px" }}>
              <p>first name: {elem.firstName}</p>
              <p>last name: {elem.lastName}</p>
              <p>E-mail: {elem.email}</p>
              <p>createdAt: {elem.createdAt}</p>
              <p>userID: {elem._id}</p>

              {elem.reservations.length > 0 &&
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
  );
};

export default UsersList;
