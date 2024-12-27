import React, { useState } from "react";
import TopBar from "./TopBar";
import { MdZoomIn, MdZoomOut } from "react-icons/md";
import { IoMdDownload, IoMdLink } from "react-icons/io";

const ResumeMiddle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [scale, setScale] = useState(1); // Scale state for zoom functionality
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (!isDragging) {
      setIsDragging(true);
      setOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newLeft = e.clientX - offset.x;
      const newTop = e.clientY - offset.y;

      setPosition({ x: newLeft, y: newTop });
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.1, 3)); // Limit maximum zoom level
  };

  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.5)); // Limit minimum zoom level
  };

  return (
    <div
      className="flex-1"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      // onMouseLeave={handleMouseUp} // Stop dragging when the cursor leaves the container
    >
      <TopBar />
      <div
        style={{
          background: "rgb(23 23 23 / 1)",
          color: "rgb(245 245 245 / 1)",
          height: "93%",
          position: "relative",
          overflow: "hidden",
        }}
        className="flex justify-center items-center"
      >
        <div
          style={{
            width: "40%",
            height: "97%",
            background: "#ffffff",
            position: "absolute",
            top: position.y,
            left: position.x,
            cursor: "move",
            transform: `scale(${scale})`,
            transformOrigin: "center",
          }}
          onMouseDown={handleMouseDown}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "3%",
            left: "40%",
            display: "flex",
            gap: "20px",
            background: "rgb(38, 38, 38)",
            padding: "5px 10px 5px 10px",
            borderRadius: "22px",
            opacity: "0.7",
          }}
        >
          <MdZoomIn
            size={25}
            className="cursor-pointer"
            onClick={handleZoomIn}
          />
          <MdZoomOut
            size={25}
            className="cursor-pointer"
            onClick={handleZoomOut}
          />
          <IoMdLink size={25} className="cursor-pointer" />
          <IoMdDownload size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ResumeMiddle;
