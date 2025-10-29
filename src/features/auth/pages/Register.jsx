// src/features/auth/pages/Register.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    navigate('/login');
  };

  return (
    <AuthLayout 
      imageUrl="https://wallpapers.com/images/hd/html-computer-code-7lzm33u2jov7z2nj.jpg"
      imagePosition="right"
    >
      <RegisterForm onSuccess={handleRegisterSuccess} />
    </AuthLayout>
  );
};

export default Register;