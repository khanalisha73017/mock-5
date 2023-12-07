import { LOGINSUCESS } from "../userReducer/actionType";
import { ERROR, REQUEST, SUCESS } from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REQUEST:
      return { ...state, isError: false, isLoading: true };
    case LOGINSUCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload };
    case ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
