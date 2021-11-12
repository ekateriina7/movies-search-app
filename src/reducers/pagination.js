import {CHANGE_PAGE, GET_MOVIES_SUCCESS} from "../actions";
export const initialState = {
  page: 1,
  numberOfPages: 10
};

export function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
      case GET_MOVIES_SUCCESS:
        return {
          ...state,
          numberOfPages: action.payload.total_pages,
        };

    default:
      return state;
  }
}
