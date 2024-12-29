import React, { useState } from "react";
import { Modal, Button, TextInput, Label, Checkbox } from "flowbite-react";
import axiosInstance from "../api/axiosInstance";
import { generateUniqueSlug } from "../utils/_helpers";
import { toast } from "react-toastify";

const CreateNewResumeModal = ({ isCreate, setCreate, fetchData }) => {
  const [resumeData, setResumeData] = useState({
    name: "",
    slug: "",
    sections: [],
    isPublic: false,
  });

  const handleChange = (event) => {
    const label = event.target.name;
    if (label === "isPublic") {
      setResumeData((prev) => ({ ...prev, isPublic: event.target.checked }));
      return;
    }
    if (label === "name") {
      const slug = generateUniqueSlug(event.target.value);
      setResumeData((prev) => ({ ...prev, name: event.target.value, slug }));
      return;
    }
    setResumeData((prev) => ({ ...prev, [label]: event.target.value }));
  };

  const handleClose = () => {
    setCreate(false);
  };

  const handleCreate = async () => {
    try {
      await axiosInstance.post("/create-resume", resumeData);
      handleClose();
      fetchData();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Modal show={isCreate} onClose={handleClose}>
      <Modal.Header>Create a New Resume</Modal.Header>
      <Modal.Body>
        <p className="mb-4 text-sm text-gray-400">
          Start building your resume by giving it a name. It could be in
          reference to the role you are applying for, or just your favorite
          snack.
        </p>
        <div className="mb-3">
          <Label htmlFor="name" className="text-gray-400">
            Name
          </Label>
          <TextInput
            id="name"
            name="name"
            type="text"
            placeholder="Enter name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <Label htmlFor="slug" className="text-gray-400">
            Slug
          </Label>
          <TextInput
            id="slug"
            name="slug"
            value={resumeData?.slug}
            type="text"
            placeholder="Enter slug"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center">
          <Checkbox
            className="mr-3"
            name="isPublic"
            checked={resumeData?.isPublic}
            onChange={handleChange}
          />
          <Label>Is Publicly Accessible?</Label>
        </div>
      </Modal.Body>
      <Modal.Footer>
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
