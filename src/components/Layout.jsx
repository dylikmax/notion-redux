import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { LOGOUT_USER } from "../redux/user/actions";
import HeaderButton from "./HeaderButton";

function Layout() {
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch({ type: LOGOUT_USER });
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="h-16 w-full bg-stone-500 flex items-center justify-center">
        <div className="flex justify-between w-3/4">
          <h1 className="text-4xl font-bold text-white">Notion Redux</h1>
          <div className="flex gap-5 items-center">
            <HeaderButton value="About me" path="/"/>
            <HeaderButton value="Notes" path="/notes/"/>
            <HeaderButton value="Logout" onClick={handleLogout}/>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
