// authActions.js

import axios from 'axios';


export const login = (username, password) => {
  return (dispatch) => {
    // Отправляем данные на сервер для получения JWT-токена
    axios.post('/api/login', { username, password })
      .then((response) => {
        const token = response.data.token;
        // Сохраняем полученный токен в хранилище (например, в localStorage)
        localStorage.setItem('jwtToken', token);
        // Устанавливаем токен в состояние Redux
        dispatch(setCurrentUser(token));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// Устанавливаем текущего пользователя (токен) в состояние Redux
export const setCurrentUser = (token) => {
  return {
    type: 'SET_CURRENT_USER',
    payload: token
  };
};

// Выход из системы
export const logout = () => {
  return (dispatch) => {
    // Удаляем токен из хранилища (localStorage)
    localStorage.removeItem('jwtToken');
    // Удаляем токен из состояния Redux
    dispatch(setCurrentUser(null));
  };
};
