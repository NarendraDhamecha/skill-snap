import { Dropdown, Avatar } from "flowbite-react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authReducer";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/skillsnap/login");
  };

  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <Avatar
          alt="Profile Picture"
          rounded
          placeholderInitials="ND"
          className="cursor-pointer"
        />
      }
    >
      <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
    </Dropdown>
  );
};

export default Profile;
