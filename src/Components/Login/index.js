import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginAttempted, setIsLoginAttempted] = useState(false);

  const handleUserLogin = () => {
    const userCredentials = { username, password };
    setIsLoginAttempted(true);
    dispatch(login(userCredentials));
  };

  const authState = useSelector((state) => state.auth);
  const { currentUser, loginError } = authState;

  useEffect(() => {
    if (isLoginAttempted) {
      if (currentUser) {
        alert('Login Successful!');
        navigate('/user');
      } else if (loginError) {
        alert('Login Failed. Invalid credentials.');
      }
      setIsLoginAttempted(false); 
    }
  }, [isLoginAttempted, currentUser, loginError, navigate]);

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleUserLogin}>Login</button>
    </div>
  );
};

export default Login;
