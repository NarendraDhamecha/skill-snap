// import React from "react";
// import { Avatar } from "@mui/material";

// const RoundedSquareIcon = () => {
//   return (
//     <Avatar
//       sx={{
//         bgcolor: "#ffffff", // White background color
//         color: "#1e88e5", // Blue text color
//         borderRadius: "8px", // Rounded corners
//         width: 48, // Adjust width as per your design
//         height: 48, // Adjust height as per your design
//         fontSize: "24px", // Font size for the letter
//         fontWeight: "bold", // Bold font weight
//       }}
//     >
//       S
//     </Avatar>
//   );
// };

// export default RoundedSquareIcon;
import React from "react";
import { Avatar } from "flowbite-react";

const RoundedSquareIcon = () => {
  return (
    <Avatar
      alt="Rounded Square Icon"
      className="bg-white text-blue-500 font-bold text-xl rounded-lg flex items-center justify-center"
      style={{
        width: "48px", // Adjust width as per your design
        height: "48px", // Adjust height as per your design
      }}
    >
      S
    </Avatar>
  );
};

export default RoundedSquareIcon;
