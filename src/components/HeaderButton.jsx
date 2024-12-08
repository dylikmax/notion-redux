import { Link, useLocation } from "react-router";
import {
  activatedHeaderButtonStyle,
  headerButtonStyle,
} from "../styles/tailwind.styles";

function HeaderButton({ path, value, onClick }) {
  const location = useLocation();
  return location.pathname === path ? (
    <input type="button" value={value} className={activatedHeaderButtonStyle} />
  ) : (
    <Link to={path}>
      <input type="button" value={value} className={headerButtonStyle} onClick={onClick}/>
    </Link>
  );
}

export default HeaderButton;
