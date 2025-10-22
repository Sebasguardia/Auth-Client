// src/components/Input/Input.jsx
import React from 'react';
import styles from './Input.module.css';

const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  required = false,
  className = '',
  name, // Añadir name aquí
  ...props // Para cualquier otra prop
}) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`${styles.input} ${className}`}
        name={name} // Pasar el name al input
        {...props} // Pasar cualquier otra prop
      />
    </div>
  );
};

export default Input;