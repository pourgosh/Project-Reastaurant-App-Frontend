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
      <div className="addStaffBtn">
        <p onClick={registrationFormControl}>Add Staff member</p>
      </div>
      {showRegistration && (
        <StaffRegistration setShowRegistration={setShowRegistration} />
      )}

      <div className="staffTitleContainer">
        <p>List of staff members</p>
      </div>
      <div className="staffInfoWrapperWrapper">
        {staffList &&
          staffList.map((elem) => {
            return (
              <div key={elem._id} className="staffInfoWrapper">
                <div className="staffInfoContainer">
                  <p>first name: {elem.firstName}</p>
                  <p>last name: {elem.lastName}</p>
                  <p>E-mail: {elem.email}</p>
                  {elem.phoneNumber && <p>phone number: {elem.phoneNumber}</p>}
                  {elem.age && <p>Age: {elem.age}</p>}
                  {elem.age && <p>Position: {elem.position}</p>}
                </div>
                <div className="staffOptionsBtn">
                  <div className="deleteStaffBtn">
                    <p
                      onClick={() => {
                        deleteStaffOnClick(elem);
                      }}
                    >
                      remove staff member
                    </p>
                  </div>
                  <div className="updateStaffBtn">
                    <p
                      onClick={() => {
                        editStaffFormControler(elem._id);
                      }}
                    >
                      Update Staff Member
                    </p>
                  </div>
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
      </div>
    </>
  );
};

export default StaffList;
