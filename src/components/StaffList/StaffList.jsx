const StaffList = ({ staffList }) => {
  return (
    <>
      {staffList &&
        staffList.map((elem) => {
          return (
            <div key={elem._id} style={{ margin: "10px" }}>
              <div>
                <p>{elem.firstName}</p>
                <p>{elem.lastName}</p>
                <p>{elem.email}</p>
                {elem.phoneNumber && <p>{elem.phoneNumber}</p>}
                <p>{elem.phoneNumber}</p>
                {elem.age && <p>{elem.age}</p>}
                {elem.age && <p>{elem.position}</p>}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default StaffList;
