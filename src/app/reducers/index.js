import counter from "./counter-reducer";
import auth from "./auth-reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter,
  auth,
});
export default allReducers;