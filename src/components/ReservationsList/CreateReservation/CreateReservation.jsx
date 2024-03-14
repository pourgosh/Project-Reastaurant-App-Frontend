import { useState } from "react";
import FormInput from "../../AuthForm/FormInput/FormInput";
import axios from "axios";
import { API_URL } from "../../../../ApiUrl";
import { useCookies } from "react-cookie";

const CreateReservation = ({ getUsersInfo, setMakeReservation }) => {
  // eslint-disable-next-line no-unused-vars
  const [cookie, _] = useCookies("access_token");

  const [newReserVation, setNewReservation] = useState({
    reserver: "",
    time: "",
    date: "",
    totalClients: 0,
  });

  const submitReservation = async (e) => {
    e.preventDefault();
    try {
      const newInfo = {
        reserver: window.localStorage.profileID,
        time: new Date(newReserVation.time),
        date: new Date(newReserVation.date),
        totalClients: newReserVation.totalClients,
      };
      await axios.post(`${API_URL}/reservation`, newInfo, {
        headers: { token: cookie.access_token },
      });
      getUsersInfo();
      setMakeReservation(false);
    } catch (err) {
      console.error(err);
    }
  };

  //   const handleTimeChange = (e) => {
  //     const currentValue = e.target.value;
  //     const [hours, minutes] = currentValue.split(":");
  //     const dateObj = new Date();
  //     dateObj.setHours(hours, minutes);
  //     setNewReservation({
  //       ...newReserVation,
  //       time: dateObj,
  //     });
  //   };

  return (
    <div className="reservationFormWrapper">
      <form onSubmit={submitReservation} className="reservationForm">
        <FormInput
          inputType="time"
          inputText="Time"
          inputValue={newReserVation.time}
          //   onChange={handleTimeChange}
          onChange={(e) => {
            setNewReservation({
              ...newReserVation,
              time: e.target.value,
            });
          }}
        />
        <FormInput
          inputType="date"
          inputText="Date"
          inputValue={newReserVation.date}
          onChange={(e) => {
            setNewReservation({
              ...newReserVation,
              date: e.target.value,
            });
          }}
        />
        <FormInput
          inputType="number"
          inputText="total clients"
          required="required"
          minValue="1"
          maxValue="10"
          inputValue={newReserVation.totalClients}
          onChange={(e) => {
            setNewReservation({
              ...newReserVation,
              totalClients: e.target.value,
            });
          }}
        />
        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
};

export default CreateReservation;
