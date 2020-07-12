const INITIAL_STATE = {
  userName: "",
  login: false,
};
const fetchLoginReducer = (state = INITIAL_STATE, action) => {
  console.log(action, 'action');
  switch (action.type) {
    case "FETCH_LOGIN_SUCCESS":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
export default fetchLoginReducer;