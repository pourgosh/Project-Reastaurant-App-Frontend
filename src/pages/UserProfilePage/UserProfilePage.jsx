import axios from "axios";
import { useCookies } from "react-cookie";
import { API_URL } from "../../../ApiUrl";
import { useEffect, useState } from "react";
import * as icons from "react-icons/io5";
import UserReservations from "../../components/ReservationsList/UserReservationsList.jsx/UserReservations";
import CreateReservation from "../../components/ReservationsList/CreateReservation/CreateReservation";
import UpdateUserInfo from "../../components/UpdateUserInfo/UpdateUserInfo";
import "./userProfile.css";

const UserProfilePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookie, _] = useCookies("access_id");
  // eslint-disable-next-line no-unused-vars
  const [tokenCookie, setTokenCookie] = useCookies("access_token");
  const accessID = cookie.access_id;
  const [userInfo, setUserInfo] = useState(null);
  const [displayReservations, setDisplayReservations] = useState(false);
  const [makeReservation, setMakeReservation] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const userToken = localStorage.getItem("userID");

  const getUserInfo = async () => {
    try {
      const result = await axios.get(`${API_URL}/users/${accessID}`, {
        headers: { token: userToken },
      });

      setUserInfo(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  const displayDashboard = () => {
    setDashboard(!dashboard);
  };

  const displayReservationContent = () => {
    setDisplayReservations(!displayReservations);
    if (makeReservation || editForm) {
      setMakeReservation(false);
      setEditForm(false);
    }
  };

  const showCreateForm = () => {
    setMakeReservation(!makeReservation);
    if (displayReservations || editForm) {
      setDisplayReservations(false);
      setEditForm(false);
    }
  };
  const showEditForm = () => {
    setEditForm(!editForm);
    if (displayReservations || makeReservation) {
      setDisplayReservations(false);
      setMakeReservation(false);
    }
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
          <div className="dashboardWrapper">
            <div className="userInfoContainer">
              <div className="userInfo">
                {userInfo.avatar && (
                  <div className="userAvatar">
                    <img src={userInfo.avatar} alt="profile image" />
                  </div>
                )}
                <div className="userInfoTextWrapper">
                  <div className="userInfoTextContainer">
                    <p className="infoTitle">Name</p>
                    <p>
                      {userInfo.firstName} {userInfo.lastName}
                    </p>
                    <p className="infoTitle">Age</p>
                    <p>{userInfo.age ? userInfo.age : ""}</p>
                    <p className="infoTitle">E-mail Address</p>
                    <p>{userInfo.email}</p>
                    <p className="infoTitle">Phone-Number</p>
                    <p>{userInfo.phoneNumber ? userInfo.phoneNumber : ""}</p>
                    <div className="userDescription">
                      <p className="infoTitle">Description</p>
                      <p>{userInfo.description ? userInfo.description : ""}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboardContainer">
              <div className="profileDashboard" onClick={displayDashboard}>
                <icons.IoSettingsOutline />
              </div>
              {dashboard && (
                <div className="dashboardSettings">
                  <div className="setting">
                    <p onClick={displayReservationContent}>View Reservations</p>
                  </div>
                  <div className="setting">
                    <p onClick={showCreateForm}>Make a Reservation</p>
                  </div>
                  <div className="setting">
                    <p onClick={showEditForm}>Edit Profile</p>
                  </div>
                  {displayReservations && (
                    <div className="reservationInfoMain">
                      <UserReservations />
                    </div>
                  )}
                  {makeReservation && (
                    <div style={{ width: "100%" }}>
                      <CreateReservation
                        getUsersInfo={getUserInfo}
                        setMakeReservation={setMakeReservation}
                      />
                    </div>
                  )}
                  {editForm && (
                    <UpdateUserInfo
                      userInfo={userInfo}
                      getUserInfo={getUserInfo}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfilePage;
