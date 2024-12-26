import { DEFAULT_SECTIONS_LEFT } from "../constant/_constant";
import RoundedSquareIcon from "./RoundedSquareIcon";
import { CgProfile } from "react-icons/cg";

const LeftBar = () => {
  return (
    <div
      style={{
        flexBasis: "10%",
        background: " rgb(38 38 38 / 1)",
        color: " rgb(245 245 245 / 1)",
        padding: "12px 0 0 0",
      }}
    >
      <div className="flex justify-center mb-6">
        <RoundedSquareIcon />
      </div>
      {DEFAULT_SECTIONS_LEFT.map((section) => (
        <div
          key={section?.id}
          className="flex justify-between items-center cursor-pointer text-sm p-2"
        >
          <span>{section?.name}</span>
          <CgProfile size={20} />
        </div>
      ))}
    </div>
  );
};

export default LeftBar;
