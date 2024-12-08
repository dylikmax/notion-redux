import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./user/reducer";
import notesReducer from "./notes/reducer";
import { thunk } from "redux-thunk";

export default createStore(
  combineReducers({ notes: notesReducer, user: userReducer }),
  applyMiddleware(thunk)
);
