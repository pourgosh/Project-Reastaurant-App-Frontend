import axios from "axios";
import { useCookies } from "react-cookie";
import { API_URL } from "../../../../ApiUrl";
import { useEffect, useState } from "react";

const UserReservations = () => {
  const [reservation, setReservation] = useState(null);
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
  return (
    <>
      {!reservation ? (
        <h1>No Reservations Found</h1>
      ) : (
        <div>
          {reservation.map((elem) => {
            return (
              <div key={elem._id}>
                <p>first name: {elem.reserver.firstName}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default UserReservations;
