import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../css/card.css";

const Card = ({ isCreate, title, callback}) => {
  return (
    <div className="snapskill-card-parent">
      <div className="snapskill-card">
        {isCreate && (
          <IconButton size="large" onClick={callback}>
            <AddIcon className="snapskill-icon-clr" fontSize="inherit" />
          </IconButton>
        )}
        {!isCreate && <img src="https://picsum.photos/200/" width='100%' height='100%'/>}
      </div>
      <div className="snapskill-card-footer">
        <div>
          <p style={{ fontSize: "14px", padding: "6px 0 4px 0" }}>{title}</p>
          {isCreate && <p style={{ fontSize: "12px" }}>Start from scratch</p>}
        </div>
        {!isCreate && (
          <IconButton size="small">
            <MoreVertIcon className="snapskill-icon-clr" />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default Card;
