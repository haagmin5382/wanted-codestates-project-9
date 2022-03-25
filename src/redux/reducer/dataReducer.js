import { SEARCH } from "../action";

export const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH:
      return Object.assign({}, state, action.userData);

    default:
      return state;
  }
};
