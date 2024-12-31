// import { DEFAULT_SECTIONS_LEFT } from "../constant/_constant";
import RoundedSquareIcon from "./RoundedSquareIcon";
import { FaUser } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";
import { MdWork } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdCardGiftcard } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { GrLanguage } from "react-icons/gr";
import { MdInterests } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

const DEFAULT_SECTIONS_LEFT = [
  {
    id: 1,
    name: "Basics",
    icon: <FaUser size={20} />,
  },
  {
    id: 2,
    name: "Location",
    icon: <FaMapLocationDot size={20} />,
  },
  {
    id: 3,
    name: "Profiles",
    icon: <TiSocialTwitter size={20} />,
  },
  {
    id: 4,
    name: "Work",
    icon: <MdWork size={20} />,
  },
  {
    id: 5,
    name: "Education",
    icon: <RiGraduationCapFill size={20} />,
  },
  {
    id: 6,
    name: "Certifications",
    icon: <MdCardGiftcard size={20} />,
  },
  {
    id: 7,
    name: "Skills",
    icon: <SlBadge size={20} />,
  },
  {
    id: 8,
    name: "Languages",
    icon: <GrLanguage size={20} />,
  },
  {
    id: 9,
    name: "Interests",
    icon: <MdInterests size={20} />,
  },
  {
    id: 10,
    name: "Projects",
    icon: <GrProjects size={20} />,
  },
];

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
          className="flex justify-between items-center cursor-pointer text-sm px-2 py-3"
        >
          <span>{section?.name}</span>
          {section?.icon}
        </div>
      ))}
    </div>
  );
};

export default LeftBar;
