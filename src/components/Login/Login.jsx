// // Login.js

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../action/authAction';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const dispatch = useDispatch();

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Вызываем действие для аутентификации пользователя
//     dispatch(login(username, password));
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input type="text" value={username} onChange={handleUsernameChange} />
//         </div>
//         {/* <div>
//           <label>Email:</label>
//           <input type="text" value={email} onChange={handleEmailChange} />
//         </div> */}
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
