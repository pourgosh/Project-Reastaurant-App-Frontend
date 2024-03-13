import axios from "axios";
import { useCookies } from "react-cookie";
import { API_URL } from "../../../../ApiUrl";
import { useEffect, useState } from "react";

const UserReservations = () => {
  const [reservation, setReservation] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [tokenCookie, setTokenCookie] = useCookies("access_token");
  // eslint-disable-next-line no-unused-vars
  const [profileCookie, setProfileCookie] = useCookies("access_id");
  const accessID = profileCookie.access_id;

  const getUserReservations = async () => {
    try {
      const result = await axios.get(`${API_URL}/reservation`, {
        headers: { token: tokenCookie.access_token },
      });
      setReservation(
        result.data.filter((elem) => {
          if (elem.reserver._id === accessID) {
            return elem;
          }
        })
      );
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getUserReservations();
  }, []);
  const deleteReservation = async (elem) => {
    try {
      const elemID = elem._id;
      await axios.delete(`${API_URL}/reservation/${elemID}`, {
        headers: { token: tokenCookie.access_token },
      });
      alert("Reservation has been Canceled");
      getUserReservations();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      {reservation && (
        <div className="reservationInfoWrapper">
          {reservation.map((elem) => {
            return (
              <div key={elem._id} className="reservationItemWrapper">
                <div className="reservationInfo">
                  <p>first name: {elem.reserver.firstName}</p>
                </div>
                <div className="deleteBtn">
                  <p
                    onClick={() => {
                      deleteReservation(elem);
                    }}
                  >
                    Delete Reservation
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {!reservation.length && (
        <div className="noContentInfo">
          <p>No Reservations Found!</p>
        </div>
      )}
    </>
  );
};

export default UserReservations;
