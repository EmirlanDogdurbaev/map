// // store.js

// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducer/rootReducer';

// // Получаем токен из localStorage (если он там есть)
// const token = localStorage.getItem('jwtToken');

// // Начальное состояние приложения
// const initialState = {
//   auth: {
//     isAuthenticated: token ? true : false,
//     user: token ? token : null
//   }
// };

// // Применяем middleware для асинхронных действий
// const middleware = [thunk];

// // Создаем хранилище Redux
// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// export default store;
// store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
