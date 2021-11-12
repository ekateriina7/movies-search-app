
export const CHANGE_PAGE = "Change page";
export const changePage = (page) => ({
  type: CHANGE_PAGE,
  payload: page,
});

export const GET_TOTAL_PAGES = "Get total pages";
export const getTotalPages = () => ({
  type: GET_TOTAL_PAGES,
});
