// import React, { useState } from "react";
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   TextField,
//   Switch,
//   FormControlLabel,
// } from "@mui/material";
// import axiosInstance from "../api/axiosInstance";

// const CreateNewResumeModal = ({ isCreate, setCreate }) => {
//   const [isPublic, setIsPublic] = useState(false);
//   const [resumeData, setResumeData] = useState({
//     name: "",
//     slug: "",
//     sections: [],
//     isPublic: false,
//   });

//   const handleChange = (event) => {
//     const label = event.target.name;
//     setResumeData((prev) => ({ ...prev, [label]: event.target.value }));
//   };

//   const handleClose = () => {
//     setCreate(false);
//     console.log("Modal closed");
//   };

//   const handleCreate = async () => {
//     console.log("Create clicked");
//     const payload = {
//       name: resumeData?.name,
//       slug: resumeData?.slug,
//       sections: [
//         {
//           title: "test title",
//           content: {
//             text: "test text",
//           },
//         },
//       ],
//     };
//     await axiosInstance.post("/create-resume", payload);
//   };

//   const handleCancel = () => {
//     console.log("Cancel clicked");
//     handleClose();
//   };

//   return (
//     <Dialog
//       open={isCreate}
//       onClose={handleClose}
//       maxWidth="sm"
//       fullWidth
//       sx={{
//         "& .MuiPaper-root": {
//           backgroundColor: "rgb(23, 23, 23)", // Dark background
//           color: "rgba(255, 255, 255, 0.87)", // Primary text color
//           borderRadius: "8px", // Rounded corners
//           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Subtle shadow
//         },
//         "& .MuiDialogTitle-root": {
//           borderBottom: "1px solid rgba(255, 255, 255, 0.12)", // Header separator
//           marginBottom: "8px",
//         },
//         "& .MuiDialogContentText-root": {
//           color: "rgba(255, 255, 255, 0.6)", // Secondary text color
//         },
//       }}
//     >
//       <DialogTitle>Create a new resume</DialogTitle>
//       <DialogContent>
//         <DialogContentText>
//           Start building your resume by giving it a name. It could be in
//           reference to the role you are applying for, or just your favorite
//           snack.
//         </DialogContentText>
//         <TextField
//           autoFocus
//           margin="dense"
//           id="name"
//           label="Name"
//           name="name"
//           onChange={handleChange}
//           type="text"
//           fullWidth
//           variant="outlined"
//           InputProps={{
//             style: {
//               color: "rgba(255, 255, 255, 0.87)", // Input text color
//               backgroundColor: "rgba(255, 255, 255, 0.1)", // Input background
//               borderRadius: "4px",
//             },
//           }}
//           InputLabelProps={{
//             style: {
//               color: "rgba(255, 255, 255, 0.6)", // Label text color
//             },
//           }}
//         />
//         <TextField
//           margin="dense"
//           id="slug"
//           label="Slug"
//           type="text"
//           name="slug"
//           onChange={handleChange}
//           fullWidth
//           variant="outlined"
//           InputProps={{
//             style: {
//               color: "rgba(255, 255, 255, 0.87)", // Input text color
//               backgroundColor: "rgba(255, 255, 255, 0.1)", // Input background
//               borderRadius: "4px",
//             },
//           }}
//           InputLabelProps={{
//             style: {
//               color: "rgba(255, 255, 255, 0.6)", // Label text color
//             },
//           }}
//         />
//         <FormControlLabel
//           control={
//             <Switch
//               checked={isPublic}
//               onChange={(e) => setIsPublic(e.target.checked)}
//             />
//           }
//           label="Is Publicly Accessible?"
//           style={{ color: "rgba(255, 255, 255, 0.87)" }}
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button
//           onClick={handleCancel}
//           style={{
//             color: "rgba(255, 255, 255, 0.87)",
//             backgroundColor: "rgba(255, 255, 255, 0.1)",
//           }}
//         >
//           Cancel
//         </Button>
//         <Button
//           onClick={handleCreate}
//           variant="contained"
//           style={{
//             backgroundColor: "#3b82f6", // Blue button color
//             color: "#fff",
//           }}
//         >
//           Create Resume
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default CreateNewResumeModal;
import React, { useState } from "react";
import { Modal, Button, TextInput, Label } from "flowbite-react";
import axiosInstance from "../api/axiosInstance";

const CreateNewResumeModal = ({ isCreate, setCreate }) => {
  const [isPublic, setIsPublic] = useState(false);
  const [resumeData, setResumeData] = useState({
    name: "",
    slug: "",
    sections: [],
    isPublic: false,
  });

  const handleChange = (event) => {
    const label = event.target.name;
    setResumeData((prev) => ({ ...prev, [label]: event.target.value }));
  };

  const handleClose = () => {
    setCreate(false);
    console.log("Modal closed");
  };

  const handleCreate = async () => {
    console.log("Create clicked");
    const payload = {
      name: resumeData?.name,
      slug: resumeData?.slug,
      sections: [
        {
          title: "test title",
          content: {
            text: "test text",
          },
        },
      ],
    };
    await axiosInstance.post("/create-resume", payload);
    handleClose();
  };

  return (
    <Modal
      show={isCreate}
      onClose={handleClose}
      size="lg"
      position="center"
      className="bg-gray-900 text-white"
    >
      <Modal.Header className="border-b border-gray-700">
        Create a New Resume
      </Modal.Header>
      <Modal.Body className="bg-gray-800">
        <p className="mb-4 text-sm text-gray-400">
          Start building your resume by giving it a name. It could be in
          reference to the role you are applying for, or just your favorite
          snack.
        </p>
        <div className="mb-4">
          <Label htmlFor="name" className="text-gray-400">
            Name
          </Label>
          <TextInput
            id="name"
            name="name"
            type="text"
            placeholder="Enter name"
            onChange={handleChange}
            className="mt-1 bg-gray-700 text-gray-200"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="slug" className="text-gray-400">
            Slug
          </Label>
          <TextInput
            id="slug"
            name="slug"
            type="text"
            placeholder="Enter slug"
            onChange={handleChange}
            className="mt-1 bg-gray-700 text-gray-200"
          />
        </div>
        <div className="flex items-center">
          {/* <Switch
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
            className="mr-2"
          /> */}
          <Label htmlFor="isPublic" className="text-gray-400">
            Is Publicly Accessible?
          </Label>
        </div>
      </Modal.Body>
      <Modal.Footer className="bg-gray-800 border-t border-gray-700">
        <Button
          color="gray"
          onClick={handleClose}
          className="text-gray-300 bg-gray-600 hover:bg-gray-500"
        >
          Cancel
        </Button>
        <Button
          onClick={handleCreate}
          className="bg-blue-600 text-white hover:bg-blue-500"
        >
          Create Resume
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateNewResumeModal;
