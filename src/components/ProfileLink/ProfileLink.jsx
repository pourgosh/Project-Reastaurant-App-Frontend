import { useNavigate } from "react-router-dom";
import * as icons from "react-icons/cg";
import "./profileLink.css";

const ProfileLink = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/user/profile");
  };
  return (
    <>
      <div className="profileLink" onClick={onClick}>
        <icons.CgProfile />
      </div>
    </>
  );
};

export default ProfileLink;
