import React, { useState } from "react";
import Profile from "../components/Profile";
import RoundedSquareIcon from "../components/RoundedSquareIcon";
import "../css/resumeList.css";
import { IoMdAdd } from "react-icons/io";
import CreateNewResumeModal from "../components/CreateNewResumeModal";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { removeSpaces } from "../utils/_helpers";
import useGetRequest from "../hooks/useGetRequest";
import ResumeListSkeleton from "../skeletons/ResumeListSkeleton";
import { ENDPOINTS } from "../constant/_constant";

const ResumeList = () => {
  const [isCreateNew, setCreateNew] = useState(false);
  const navigate = useNavigate();

  const { data: resumes, isLoading, fetchData } = useGetRequest(ENDPOINTS.GET_RESUMES);

  const handleCreateNewResume = () => {
    setCreateNew((prev) => !prev);
  };

  const handleResumeClick = (resume) => {
    // const resumeTitle = removeSpaces(resume?.name).toLowerCase();
    const resumeId = resume?.id;
    const path = `/${resumeId}/${resume?.slug}/build`;
    navigate(path);
  };

  return (
    <>
      <div className="snapskill-resume-list-container">
        <div className="snapskill-resume-list-header">
          <RoundedSquareIcon />
          <Profile />
        </div>
        <div className="snapskill-resume-list">
          {isLoading ? (
            <ResumeListSkeleton />
          ) : (
            <>
              <Card style={{ flexBasis: "22%" }}>
                <div className="text-gray-900 flex justify-center">
                  <IoMdAdd
                    size={35}
                    className="cursor-pointer"
                    onClick={handleCreateNewResume}
                  />
                </div>
                <h6 className="text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  Create New Resume
                </h6>
              </Card>
              {resumes?.map((resume) => (
                <Card
                  key={resume.id}
                  className="cursor-pointer"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc="../../resume-placeholder.jpg"
                  style={{ flexBasis: "22%" }}
                  onClick={() => handleResumeClick(resume)}
                >
                  <h6 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {resume?.name}
                  </h6>
                </Card>
              ))}
            </>
          )}
        </div>
      </div>
      {isCreateNew && (
        <CreateNewResumeModal
          isCreate={isCreateNew}
          setCreate={setCreateNew}
          fetchData={fetchData}
        />
      )}
    </>
  );
};

export default ResumeList;
