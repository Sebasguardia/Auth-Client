// src/features/auth/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../services/authService';
import Card from '../../../components/Card/Card';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import styles from './Register.module.css';

const Register = () => {
  const [formData, setFormData] = useState({
    document_number: '',
    name: '',
    paternal_lastname: '',
    maternal_lastname: '',
    email: '',
    phone: '',
    user_name: '',
    password: '',
    last_session: new Date().toISOString().split('T')[0],
    account_statement: true,
    document_type_id: 1,
    country_id: 179,
  });
  
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await registerUser(formData);
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Error en el registro');
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const steps = [
    { number: 1, title: 'Información Personal' },
    { number: 2, title: 'Datos de Contacto' },
    { number: 3, title: 'Credenciales' }
  ];

  return (
    <div className={styles.container}>
      {/* Background Animation */}
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      
      <Card className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>Crear Cuenta</h2>
          <p className={styles.subtitle}>Únete a nuestra comunidad</p>
        </div>

        {/* Progress Steps */}
        <div className={styles.progressContainer}>
          {steps.map((step, index) => (
            <div key={step.number} className={styles.stepWrapper}>
              <div className={`${styles.step} ${currentStep >= step.number ? styles.active : ''}`}>
                {step.number}
              </div>
              <span className={styles.stepTitle}>{step.title}</span>
              {index < steps.length - 1 && (
                <div className={`${styles.stepLine} ${currentStep > step.number ? styles.activeLine : ''}`}></div>
              )}
            </div>
          ))}
        </div>

        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className={styles.stepContent}>
              <div className={styles.inputGrid}>
                <Input
                  name="document_number"
                  placeholder="Número de documento"
                  value={formData.document_number}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="paternal_lastname"
                  placeholder="Apellido paterno"
                  value={formData.paternal_lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="maternal_lastname"
                  placeholder="Apellido materno"
                  value={formData.maternal_lastname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.buttonGroup}>
                <Button type="button" onClick={nextStep} className={styles.nextButton}>
                  Siguiente
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Contact Information */}
          {currentStep === 2 && (
            <div className={styles.stepContent}>
              <div className={styles.inputGrid}>
                <Input
                  name="email"
                  type="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.buttonGroup}>
                <Button type="button" onClick={prevStep} variant="secondary" className={styles.prevButton}>
                  Anterior
                </Button>
                <Button type="button" onClick={nextStep} className={styles.nextButton}>
                  Siguiente
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Credentials */}
          {currentStep === 3 && (
            <div className={styles.stepContent}>
              <div className={styles.inputGrid}>
                <Input
                  name="user_name"
                  placeholder="Nombre de usuario"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.terms}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={formData.account_statement}
                    onChange={(e) => setFormData({...formData, account_statement: e.target.checked})}
                    className={styles.checkbox}
                  />
                  <span>Acepto los términos y condiciones</span>
                </label>
              </div>
              <div className={styles.buttonGroup}>
                <Button type="button" onClick={prevStep} variant="secondary" className={styles.prevButton}>
                  Anterior
                </Button>
                <Button 
                  type="submit" 
                  disabled={isLoading || !formData.account_statement}
                  className={styles.registerButton}
                >
                  {isLoading ? (
                    <div className={styles.loadingContainer}>
                      <LoadingSpinner size="small" />
                      <span>Creando cuenta...</span>
                    </div>
                  ) : (
                    'Registrarse'
                  )}
                </Button>
              </div>
            </div>
          )}
        </form>

        <div className={styles.footer}>
          <p className={styles.loginText}>
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className={styles.loginLink}>
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Register;