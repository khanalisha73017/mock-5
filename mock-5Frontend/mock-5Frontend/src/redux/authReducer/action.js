import axios from "axios";
import { ERROR, REQUEST, SUCESS } from "./actionType";
import { LOGINSUCESS } from "../authReducer/actionType";

export const LoginUser = (obj) => (dispatch) => {
  dispatch({ type: REQUEST });
  axios
    .post("https://backend-mock-5-production.up.railway.app/api/login", obj)
    .then((res) => {
      dispatch({ type: LOGINSUCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ tyepe: ERROR });
    });
};
