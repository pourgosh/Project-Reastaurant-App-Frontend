import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../ApiUrl";
import { useCookies } from "react-cookie";
import ReservationsList from "../../components/ReservationsList/ReservationsList";

const StaffHomePage = () => {
  const [reservationsList, setReservationsList] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [cookies, _] = useCookies("access_token");
  const navigate = useNavigate();

  const getReservationsFromDb = async () => {
    try {
      if (cookies.access_token) {
        const response = await axios.get(`${API_URL}/reservation`, {
          headers: { token: cookies.access_token },
        });
        setReservationsList(response.data);
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getReservationsFromDb();
  }, []);

  const deleteReservation = async (elem) => {
    try {
      const elemID = elem._id;
      await axios.delete(`${API_URL}/reservation/${elemID}`, {
        headers: { token: cookies.access_token },
      });
      getReservationsFromDb();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <ReservationsList
        list={reservationsList}
        deleteFunc={deleteReservation}
      />
    </div>
  );
};

export default StaffHomePage;
