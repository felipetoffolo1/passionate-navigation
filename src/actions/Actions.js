import {
  SET_CURRENT_VERTICAL,
  SET_CURRENT_CATEGORY
} from "../constants/ActionTypes";

export const setCurrentVertical = vertical => ({ type: SET_CURRENT_VERTICAL, vertical: vertical });
export const setCurrentCategory = category => ({ type: SET_CURRENT_CATEGORY, category: category });