import {
  SET_CURRENT_CATEGORY
} from "../constants/ActionTypes";

/**
 * Set the choosen category
 * @param {object} category = The choosen category
 */
export const setCurrentCategory = category => ({ type: SET_CURRENT_CATEGORY, category: category });