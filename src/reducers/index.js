import { combineReducers } from "redux";
import verticals from "./verticalsReducer";
import categories from "./categoriesReducer";
import courses from "./coursesReducer";

/**
 * Combiner for all the reducers
 */
export default combineReducers({
  verticals,
  categories,
  courses
});
