const INITIAL_STATE = {
  userName: "",
  login: false,
  listings: [],
  cartItems: [],
};

const fetchLoginReducer = (state = INITIAL_STATE, action) => {
  const { cartItems } = state;
  switch (action.type) {
    case "FETCH_LOGIN_SUCCESS":
      return {
        ...state,
        ...action.payload
      };
    case "FETCH_LISTINGS":
      return {
        ...state,
        listings: action.payload
      };
    case "ADD_TO_CART":
      const payload =  action.payload;
      const cartProducts = [ ...cartItems, payload ];
      return {
        ...state,
        cartItems: cartProducts
      };
    default:
      return state;
  }
};
export default fetchLoginReducer;