import "../css/input.css";

const Input = ({
  type = "text",
  name = "",
  value = "",
  onChange = () => {},
  placeholder = "",
  required = false,
  disabled = false,
  label = "",
}) => {
  return (
    <div>
      {label?.length > 0 && <label>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
