import { Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const PasswordInput = ({ value, onChange }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <Label htmlFor="password" value="Password" />
      <TextInput
        id="password"
        name="password"
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Enter your password"
        required
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-2 top-2/4 text-gray-600 hover:text-gray-800"
      >
        {isPasswordVisible ? (
          <AiFillEyeInvisible size={25} />
        ) : (
          <AiFillEye size={25} />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
