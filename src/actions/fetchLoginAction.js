export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const fetchLoginAction = data => ({
  type: "FETCH_LOGIN_SUCCESS",
  payload: data
});

export function fetchLogin(data) {
  console.log(data, "actions");
  // return (dispatch, getState) => {
  //     return dispatch(fetchLoginAction(data))
  // }
}

export default {
  fetchLoginAction,
  fetchLogin
};
