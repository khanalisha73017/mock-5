import { ERROR, REQUEST, SUCESS } from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  blogusers: [],
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REQUEST:
      return { ...state, isError: false, isLoading: true };
    case SUCESS:
      return { ...state, isLoading: false, blogusers: payload };
    case ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
