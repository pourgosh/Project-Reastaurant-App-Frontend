import { useNavigate } from "react-router-dom";
import "./profileLink.css";

const ProfileLink = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/user/profile");
  };
  return (
    <>
      <div className="profileLink" onClick={onClick}>
        <p className="profileText">go to profile</p>
      </div>
    </>
  );
};

export default ProfileLink;
