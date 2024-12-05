import React, { useState } from "react";
import Profile from "../components/Profile";
import RoundedSquareIcon from "../components/RoundedSquareIcon";
import "../css/resumeList.css";
import Card from "../components/Card";
import CreateNewResumeModal from "../components/CreateNewResumeModal";

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
        <Card
          isCreate={true}
          title="Create New Resume"
          callback={handleCreateNewResume}
        />
        {DUMMY_DATA.map((resume) => (
          <Card
            key={resume.id}
            isCreate={resume.isCreate}
            title={resume.title}
          />
        ))}
      </div>
      {isCreateNew && (
        <CreateNewResumeModal isCreate={isCreateNew} setCreate={setCreateNew} />
      )}
    </div>
  );
};

export default ResumeList;
