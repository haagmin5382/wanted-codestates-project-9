export const SEARCH = "SEARCH";
export const GET_MATCH_LIST = "GET_MATCH_LIST";

export const search = (userData) => {
  return {
    type: SEARCH,
    userData,
  };
};
