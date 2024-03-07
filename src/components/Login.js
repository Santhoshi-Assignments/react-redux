// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// const Login = () => {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
    
//     const user = {
//       name: 'John Doe', 
//       country: 'USA',
//       gender: 'Male',
//       pan: 'ABCDE1234F',
//       education: {
//         tenth: {
//           instituteName: 'High School',
//           cgpa: '9.5',
//         },
//         higherSecondary: {
//           instituteName: 'Higher Secondary School',
//           cgpa: '9.8',
//         },
//         graduation: {
//           instituteName: 'University',
//           cgpa: '3.7',
//         },
//       },
//       certifications: ['Certification A', 'Certification B'],
//     };

//     dispatch({ type: 'SET_USER', payload: user });
//     history.push('/dashboard');
//   };

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <label>
//         Username:
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </label>
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) =>
//             setPassword(e.target.value)}
//             />
//           </label>
//           <button onClick={handleLogin}>Login</button>
//         </div>
//       );
//     };
    
//     export default Login;
    
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    const updatedUser = {
      ...user,
      
    };

    dispatch({ type: 'SET_USER', payload: updatedUser });

    
    history.push('/dashboard');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
