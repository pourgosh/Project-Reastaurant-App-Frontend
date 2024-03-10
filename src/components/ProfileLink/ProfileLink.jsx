const ProfileLink = () => {
  // eslint-disable-next-line no-unused-vars
  const profile = window.localStorage.profileID;

  return (
    <>
      {profile && (
        <div>
          <h1 style={{ color: "red", fontSize: "50px" }}>go to profile</h1>
        </div>
      )}
    </>
  );
};

export default ProfileLink;
