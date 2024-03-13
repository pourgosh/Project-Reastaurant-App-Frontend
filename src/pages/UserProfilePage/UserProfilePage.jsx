import axios from "axios";
import { useCookies } from "react-cookie";
import { API_URL } from "../../../ApiUrl";
import { useEffect, useState } from "react";
import UserReservations from "../../components/ReservationsList/UserReservationsList.jsx/UserReservations";
import CreateReservation from "../../components/ReservationsList/CreateReservation/CreateReservation";

const UserProfilePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookie, _] = useCookies("access_id");
  // eslint-disable-next-line no-unused-vars
  const [tokenCookie, setTokenCookie] = useCookies("access_token");
  const accessID = cookie.access_id;
  const [userInfo, setUserInfo] = useState(null);
  const [displayReservations, setDisplayReservations] = useState(false);
  const [makeReservation, setMakeReservation] = useState(false);

  const getUserInfo = async () => {
    try {
      const result = await axios.get(`${API_URL}/users/${accessID}`, {
        headers: { token: tokenCookie.access_token },
      });

      setUserInfo(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  const displayReservationContent = () => {
    setDisplayReservations(!displayReservations);
  };

  const showCreateForm = () => {
    setMakeReservation(!makeReservation);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      {!userInfo ? (
        <h1>Profile Not Found!</h1>
      ) : (
        <div>
          <div className="reservationControl">
            <div>
              <p onClick={displayReservationContent}>View Reservations</p>
            </div>
            <div>
              <p onClick={showCreateForm}>Make a Reservation</p>
            </div>
            <div>X</div>
          </div>
          <div>
            <p>{userInfo.firstName}</p>
          </div>
          {displayReservations && (
            <div>
              <UserReservations />
            </div>
          )}
          {makeReservation && (
            <div>
              <CreateReservation getUsersInfo={getUserInfo} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UserProfilePage;
