// import { DEFAULT_SECTIONS_RIGHT } from "../constant/_constant";
import Profile from "./Profile";
import { HiTemplate } from "react-icons/hi";
import { RiLayout2Fill } from "react-icons/ri";
import { MdFontDownload } from "react-icons/md";
import { IoMdColorPalette } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

const DEFAULT_SECTIONS_RIGHT = [
  {
    id: 1,
    name: "Templates",
    icon: <HiTemplate size={20} />,
  },
  {
    id: 2,
    name: "Layout",
    icon: <RiLayout2Fill size={20} />,
  },
  {
    id: 3,
    name: "Typography",
    icon: <MdFontDownload size={20} />,
  },
  {
    id: 4,
    name: "Theme",
    icon: <IoMdColorPalette size={20} />,
  },
  {
    id: 5,
    name: "Sharing",
    icon: <IoMdShare size={20} />,
  },
  {
    id: 6,
    name: "Settings",
    icon: <IoMdSettings size={20} />,
  },
];

const RightBar = () => {
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
        <Profile />
      </div>
      {DEFAULT_SECTIONS_RIGHT.map((section) => (
        <div
          key={section?.id}
          className="flex justify-between items-center cursor-pointer text-sm px-2 py-3"
        >
          <span>{section?.name}</span>
          {section?.icon}
        </div>
      ))}
    </div>
  );
};

export default RightBar;
