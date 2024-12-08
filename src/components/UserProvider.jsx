import { Provider } from "react-redux";
import store from "../redux/store";

function UserProvider({ children }) {

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default UserProvider;
