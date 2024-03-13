const ReservationsList = ({ list, deleteFunc }) => {
  return (
    <>
      {list &&
        list.map((elem) => {
          return (
            <div key={elem._id}>
              {elem.time && <p>time: {elem.time}</p>}
              {elem.totalClients && <p>totalClients: {elem.totalClients}</p>}
              {elem.date && <p>date: {elem.date}</p>}
              {elem.reserver && (
                <div>
                  <p>
                    reserver: {elem.reserver.firstName} {elem.reserver.lastName}
                  </p>
                  <p>E-mail Address: {elem.reserver.email}</p>
                  {elem.reserver.phoneNumber && (
                    <p>phoneNumber: {elem.reserver.phoneNumber}</p>
                  )}
                </div>
              )}
              <div>
                <p
                  onClick={() => {
                    deleteFunc(elem);
                  }}
                >
                  Delete Reservation
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ReservationsList;
