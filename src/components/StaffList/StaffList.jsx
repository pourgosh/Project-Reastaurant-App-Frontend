import { useState } from "react";
import EditStaffForm from "./StaffForms/EditStaffForm";
import StaffRegistration from "./StaffForms/StaffRegistration";

const StaffList = ({ staffList, deleteStaffOnClick }) => {
  const [elemToShow, setElemToShow] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);

  const registrationFormControl = () => {
    setShowRegistration(!showRegistration);
  };

  const editStaffFormControler = (elemId) => {
    setElemToShow(elemId);
  };
  return (
    <>
      <div>
        <div>
          <p onClick={registrationFormControl}>Add Staff member</p>
        </div>
        {showRegistration && (
          <StaffRegistration setShowRegistration={setShowRegistration} />
        )}
      </div>
      <div style={{ margin: "10px" }}>
        <p>List of staff members</p>
      </div>
      {staffList &&
        staffList.map((elem) => {
          return (
            <div key={elem._id} style={{ margin: "10px" }}>
              <div>
                <p>first name: {elem.firstName}</p>
                <p>last name: {elem.lastName}</p>
                <p>E-mail: {elem.email}</p>
                {elem.phoneNumber && <p>phone number: {elem.phoneNumber}</p>}
                {elem.age && <p>Age: {elem.age}</p>}
                {elem.age && <p>Position: {elem.position}</p>}
              </div>
              <div>
                <p
                  onClick={() => {
                    deleteStaffOnClick(elem);
                  }}
                >
                  remove staff member
                </p>
              </div>
              <div>
                <p
                  onClick={() => {
                    editStaffFormControler(elem._id);
                  }}
                >
                  Update Staff Member
                </p>
              </div>
              {elemToShow === elem._id && (
                <EditStaffForm
                  setElemToShow={setElemToShow}
                  requestType="post"
                  elem={elem}
                />
              )}
            </div>
          );
        })}
    </>
  );
};

export default StaffList;
