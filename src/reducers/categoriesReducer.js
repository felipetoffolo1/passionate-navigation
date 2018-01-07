import { SET_CURRENT_CATEGORY } from "../constants/ActionTypes";
import categories from "../data/categories.json";

export default (
  state = {
    all: categories,
    currentCategory: undefined
  },
  action
) => {
  switch (action.type) {

    case SET_CURRENT_CATEGORY:
      return Object.assign({}, state, { currentCategory: action.category });
    default:
      return state;
  }
};
