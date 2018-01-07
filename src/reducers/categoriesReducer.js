import { SET_CURRENT_VERTICAL } from "../constants/ActionTypes";
import categories from "../data/categories.json";

export default (
  state = {
    all: categories,
    filteredCategories: [],
    currentCategory: undefined
  },
  action
) => {
  switch (action.type) {
    /**
     * Set the fetching to true
     */
    case SET_CURRENT_VERTICAL:
      const filteredCategories = state.all.filter(category => category.Verticals === action.vertical.Id);
      return Object.assign({}, state, {
        filteredCategories: filteredCategories
      });
    default:
      return state;
  }
};
