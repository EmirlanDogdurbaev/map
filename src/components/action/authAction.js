// // authActions.js

// import axios from "axios";

// export const login = (username, password, email) => {
//   return (dispatch) => {
//     axios
//       .post("http://192.168.0.64:8000/api/login/", { username, password })
//       .then((response) => {
//         const token = response.data.token;
//         console.log(token);
//         localStorage.setItem("jwtToken", token);
//         dispatch(setCurrentUser(token));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

// // Устанавливаем текущего пользователя (токен) в состояние Redux
// export const setCurrentUser = (token) => {
//   return {
//     type: "SET_CURRENT_USER",
//     payload: token,
//   };
// };

// // Выход из системы
// export const logout = () => {
//   return (dispatch) => {
//     // Удаляем токен из хранилища (localStorage)
//     localStorage.removeItem("jwtToken");
//     // Удаляем токен из состояния Redux
//     dispatch(setCurrentUser(null));
//   };
// };


// authActions.js

import axios from 'axios';

// Действие для входа пользователя
export const login = (username, password, email) => {
  return (dispatch) => {
    // Отправляем запрос на сервер для получения токена
    axios.post('http://192.168.0.64:8000/api/login/', { username, password , email})
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        console.log(token);
        dispatch(setCurrentUser(token));
      })
      .catch((error) => {
        dispatch(loginError(error.response.data.error));
      });
  };
};

export const setCurrentUser = (token) => {
  return {
    type: 'SET_CURRENT_USER',
    payload: token
  };
};

export const loginError = (error) => {
  return {
    type: 'LOGIN_ERROR',
    payload: error
  };
};
