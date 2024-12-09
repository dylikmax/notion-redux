import { useDispatch } from "react-redux";
import { REMOVE_ERRORS } from "../../redux/notes/actions";
import { headerButtonStyle } from "../../styles/tailwind.styles";
import { useNavigate } from "react-router";

function NotFoundPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClick = () => {
    dispatch({ type: REMOVE_ERRORS });
    navigate('/')
  };
  return (
    <div className="bg-stone-500 min-h-screen flex items-center flex-col justify-center gap-5">
      <h1 className="text-6xl text-white font-bold">
        Oups, something went wrong
      </h1>
      <p className="text-white text-lg">
        This resourse does't exsist or you don't have access to it.
      </p>
        <input
          type="button"
          value="On main page"
          className={headerButtonStyle}
          onClick={onClick}
        />
    </div>
  );
}

export default NotFoundPage;
