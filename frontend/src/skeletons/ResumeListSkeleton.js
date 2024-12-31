import { Card } from "flowbite-react";

const ResumeListSkeleton = () => {
  return Array(4)
    .fill(0)
    .map((_, index) => (
      <Card key={index} style={{ flexBasis: "22%" }} className="animate-pulse">
        <div className="bg-gray-300 rounded-lg" style={{height: '150px'}}></div>
        <h6 className="h-6 bg-gray-300 rounded"></h6>
      </Card>
    ));
};

export default ResumeListSkeleton;
