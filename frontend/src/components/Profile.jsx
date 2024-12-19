import { Dropdown, Avatar } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authReducer";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.auth);
  const fullName = user?.user?.name || "";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
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
      <Dropdown.Header>
        <span className="block">Hello</span>
        <span className="block text-lg">{fullName}</span>
      </Dropdown.Header>
      <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
    </Dropdown>
  );
};

export default Profile;
