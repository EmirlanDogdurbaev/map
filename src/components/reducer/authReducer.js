// // authReducer.js

// const initialState = {
//   isAuthenticated: false,
//   user: null,
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_CURRENT_USER":
//       return {
//         isAuthenticated: action.payload ? true : false,
//         user: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;


// authReducer.js

const initialState = {
  token: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        token: action.payload,
        error: null
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        token: null,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
