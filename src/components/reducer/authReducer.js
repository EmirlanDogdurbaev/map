// authReducer.js

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        isAuthenticated: action.payload ? true : false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
