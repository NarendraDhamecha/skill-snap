import '../css/button.css'

const Button = ({ content, onClick, type = "button", disabled }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
