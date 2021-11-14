import {
  CHANGE_PAGE,
  GET_MOVIES_SUCCESS,
  SEARCH_MOVIES_BY_TITLE_SUCCESS,
  SEARCH_MOVIES_BY_GENRES_LANGUAGE_SUCCESS,
} from "../actions";
export const initialState = {
  page: 1,
  numberOfPages: 10,
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
    case SEARCH_MOVIES_BY_TITLE_SUCCESS:
      return {
        ...state,
        numberOfPages: action.payload.data.total_pages,
      };
    case SEARCH_MOVIES_BY_GENRES_LANGUAGE_SUCCESS:
      return {
        ...state,
        numberOfPages: action.payload.total_pages,
      };

    default:
      return state;
  }
}
