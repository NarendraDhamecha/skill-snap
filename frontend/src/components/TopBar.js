import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { useParams } from "react-router-dom";

const TopBar = () => {
  const { username } = useParams();

  return (
    <div
      style={{
        background: " rgb(38 38 38 / 1)",
        color: " rgb(245 245 245 / 1)",
        height: "7%",
      }}
      className="flex justify-between items-center px-6"
    >
      <FaAngleRight className="cursor-pointer" />
      <div className="flex items-center gap-3">
        <MdHome className="cursor-pointer"/>
        <span>/</span>
        <span>{username}</span>
      </div>
      <FaAngleLeft className="cursor-pointer" />
    </div>
  );
};

export default TopBar;
