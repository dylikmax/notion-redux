import { Link } from "react-router";
import { buttonStyle } from "../styles/tailwind.styles";

function Button({ value, onClick, path }) {
  return (
    <Link to={path}>
      <input
        type="button"
        value={value}
        className={buttonStyle}
        onClick={onClick}
      />
    </Link>
  );
}

export default Button;
