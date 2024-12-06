import { IoMdAdd, IoMdMore } from "react-icons/io";
import "../css/card.css";

const Card = ({ isCreate, title, callback }) => {
  return (
    <div className="snapskill-card-parent">
      <div className="snapskill-card">
        {isCreate && (
          <IoMdAdd
            className="snapskill-icon-clr"
            fontSize="inherit"
            onClick={callback}
          />
        )}
        {!isCreate && (
          <img src="https://picsum.photos/200/" width="100%" height="100%" />
        )}
      </div>
      <div className="snapskill-card-footer">
        <div>
          <p style={{ fontSize: "14px", padding: "6px 0 4px 0" }}>{title}</p>
          {isCreate && <p style={{ fontSize: "12px" }}>Start from scratch</p>}
        </div>
        {!isCreate && <IoMdMore className="snapskill-icon-clr" />}
      </div>
    </div>
  );
};

export default Card;
