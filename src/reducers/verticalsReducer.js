import { SET_CURRENT_VERTICAL } from "../constants/ActionTypes";
import verticals from "../data/verticals.json";

export default (
  state = { all: verticals, currentVertical: undefined  },
  action
) => {
  switch (action.type) {
    /**
     * Set the fetching to true
     */
    case SET_CURRENT_VERTICAL:
      return Object.assign({}, state, { currentVertical: action.vertical});
    default:
      return state;
  }
};
