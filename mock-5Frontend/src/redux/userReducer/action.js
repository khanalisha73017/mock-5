import axios from "axios";
import { ERROR, REQUEST, SUCESS } from "./actionType";

export const registerUser = (obj) => (dispatch) => {
  dispatch({ type: REQUEST });
  axios
    .post("https://backend-mock-5-production.up.railway.app/api/register", obj)
    .then((res) => {
      dispatch({ type: SUCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ tyepe: ERROR });
    });
};
