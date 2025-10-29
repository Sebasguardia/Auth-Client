// src/features/auth/pages/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/blog');
  };

  return (
    <AuthLayout 
      imageUrl="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
      imagePosition="left"
    >
      <LoginForm onSuccess={handleLoginSuccess} />
    </AuthLayout>
  );
};

export default Login;