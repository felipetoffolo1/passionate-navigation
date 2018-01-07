import { SET_CURRENT_CATEGORY } from "../constants/ActionTypes";
import courses from "../data/courses.json";

export default (
  state = { all: courses, filteredCourses: [], currentCourse: undefined },
  action
) => {
  switch (action.type) {
    /**
     * Set the fetching to true
     */
    case SET_CURRENT_CATEGORY:
      const filteredCourses = state.all.filter(courses => courses.Categories === action.category.Id && courses.State === "active");
      return Object.assign({}, state, { filteredCourses });
    default:
      return state;
  }
};
