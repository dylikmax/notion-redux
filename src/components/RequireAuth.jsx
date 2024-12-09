import { Navigate, Outlet, useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../redux/user/actions";
import { useEffect } from "react";
import Loading from "./Loading";
import { fetchNotes, REMOVE_ERRORS } from "../redux/notes/actions";
import NotFoundPage from "../pages/not-found-page/NotFoundPage";

function RequireAuth() {
  const { loading: userLoading } = useSelector((state) => state.user);
  const { error: noteError } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const location = useLocation();
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (id) {
      dispatch(fetchUserById(id));
      dispatch(fetchNotes(id));
    }
  }, [id]);

  if (userLoading) {
    return <Loading />;
  }

  if (noteError) {
    console.log("noteError")
    return <NotFoundPage />
  }

  if (!id && location.pathname !== "/login") {
    return <Navigate to="/login" replace />;
  }

  if (id && location.pathname === "/login") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default RequireAuth;
