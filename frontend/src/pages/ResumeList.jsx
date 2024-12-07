import React, { useState } from "react";
import Profile from "../components/Profile";
import RoundedSquareIcon from "../components/RoundedSquareIcon";
import "../css/resumeList.css";
import { IoMdAdd } from "react-icons/io";
import CreateNewResumeModal from "../components/CreateNewResumeModal";
import { Card } from "flowbite-react";

const DUMMY_DATA = [
  { id: 2, isCreate: false, title: "narendra1" },
  { id: 3, isCreate: false, title: "narendra2" },
  { id: 4, isCreate: false, title: "narendra3" },
  { id: 5, isCreate: false, title: "narendra4" },
];

const ResumeList = () => {
  const [isCreateNew, setCreateNew] = useState(false);

  const handleCreateNewResume = () => {
    setCreateNew((prev) => !prev);
  };

  return (
    <div className="snapskill-resume-list-container">
      <div className="snapskill-resume-list-header">
        <RoundedSquareIcon />
        <Profile />
      </div>
      <div className="snapskill-resume-list">
        <Card className="max-w-sm">
          <div className="text-gray-900 flex justify-center">
            <IoMdAdd
              size={35}
              className="cursor-pointer"
              onClick={handleCreateNewResume}
            />
          </div>
          <h6 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Create New Resume
          </h6>
        </Card>
        {DUMMY_DATA.map((resume) => (
          <Card
            key={resume.id}
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://picsum.photos/280/"
          >
            <h6 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {resume.title}
            </h6>
          </Card>
        ))}
      </div>
      {isCreateNew && (
        <CreateNewResumeModal isCreate={isCreateNew} setCreate={setCreateNew} />
      )}
    </div>
  );
};

export default ResumeList;
