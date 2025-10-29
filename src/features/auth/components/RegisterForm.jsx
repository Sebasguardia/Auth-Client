// src/features/auth/components/RegisterForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../services/authService';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

const RegisterForm = ({ onSuccess }) => {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await registerUser(formData);
      onSuccess?.();
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
    { number: 1, title: 'Personal' },
    { number: 2, title: 'Contacto' },
    { number: 3, title: 'Credenciales' }
  ];

  return (
    <div className="w-full max-w-sm">
      
      {/* Header con Logo (solo en mobile) - IGUAL QUE LOGIN */}
      <div className="lg:hidden text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">DevHub</span>
        </div>
      </div>

      {/* Card del formulario SIN BORDES - EXACTAMENTE IGUAL QUE LOGIN */}
      <div className="bg-transparent p-6 relative">
        
        {/* Dark Mode Toggle - EXACTO IGUAL QUE LOGIN */}
        <div className="absolute top-0 right-0">
          <button
            onClick={() => document.documentElement.classList.toggle('dark')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 
                     hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
            title="Alternar modo oscuro"
          >
            <svg className="w-4 h-4 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
            <svg className="w-4 h-4 dark:hidden" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>
        </div>

        {/* Título del formulario - EXACTO IGUAL QUE LOGIN */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-3 shadow-lg">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Crear Cuenta
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            Únete a nuestra comunidad
          </p>
        </div>

        {/* Progress Steps - Minimalista */}
        <div className="flex justify-between items-center mb-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center flex-1">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center 
                            font-semibold text-xs mb-1 transition-all duration-300
                            ${currentStep >= step.number 
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow' 
                              : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                {step.number}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 text-center">
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Error Message - EXACTO IGUAL QUE LOGIN */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 px-3 py-2 rounded-lg mb-4 text-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="animate-fadeIn space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Número de documento
                </label>
                <input
                  name="document_number"
                  placeholder="Ingresa tu documento"
                  value={formData.document_number}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           placeholder-gray-500 dark:placeholder-gray-400 text-sm
                           transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           placeholder-gray-500 dark:placeholder-gray-400 text-sm
                           transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Apellido paterno
                </label>
                <input
                  name="paternal_lastname"
                  placeholder="Apellido paterno"
                  value={formData.paternal_lastname}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           placeholder-gray-500 dark:placeholder-gray-400 text-sm
                           transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Apellido materno
                </label>
                <input
                  name="maternal_lastname"
                  placeholder="Apellido materno"
                  value={formData.maternal_lastname}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           placeholder-gray-500 dark:placeholder-gray-400 text-sm
                           transition-colors duration-200"
                />
              </div>
              <button
                type="button"
                onClick={nextStep}
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2.5 px-4 
                         rounded-lg font-semibold text-sm hover:bg-gray-800 dark:hover:bg-gray-100 
                         transition-colors duration-200 transform hover:scale-[1.02] active:scale-95
                         focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Siguiente
              </button>
            </div>
          )}

          {/* Step 2: Contact Information */}
          {currentStep === 2 && (
            <div className="animate-fadeIn space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Correo electrónico
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           placeholder-gray-500 dark:placeholder-gray-400 text-sm
                           transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Teléfono
                </label>
                <input
                  name="phone"
                  placeholder="Tu teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           placeholder-gray-500 dark:placeholder-gray-400 text-sm
                           transition-colors duration-200"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 bg-gray-500 text-white py-2.5 px-4 rounded-lg font-semibold 
                           text-sm hover:bg-gray-600 transition-colors duration-200 
                           transform hover:scale-[1.02] active:scale-95
                           focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2.5 px-4 
                           rounded-lg font-semibold text-sm hover:bg-gray-800 dark:hover:bg-gray-100 
                           transition-colors duration-200 transform hover:scale-[1.02] active:scale-95
                           focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Credentials */}
          {currentStep === 3 && (
            <div className="animate-fadeIn space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nombre de usuario
                </label>
                <input
                  name="user_name"
                  placeholder="Elige un nombre de usuario"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           placeholder-gray-500 dark:placeholder-gray-400 text-sm
                           transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contraseña
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Crea una contraseña segura"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           placeholder-gray-500 dark:placeholder-gray-400 text-sm
                           transition-colors duration-200"
                />
              </div>
              
              {/* Terms and Conditions */}
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <label className="flex items-center space-x-3 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.account_statement}
                    onChange={(e) => setFormData({...formData, account_statement: e.target.checked})}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                  />
                  <span>
                    Acepto los <span className="text-blue-600 dark:text-blue-400 font-semibold">términos y condiciones</span> y la{' '}
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">política de privacidad</span>
                  </span>
                </label>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 bg-gray-500 text-white py-2.5 px-4 rounded-lg font-semibold 
                           text-sm hover:bg-gray-600 transition-colors duration-200 
                           transform hover:scale-[1.02] active:scale-95
                           focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Anterior
                </button>
                <button
                  type="submit"
                  disabled={isLoading || !formData.account_statement}
                  className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2.5 px-4 
                           rounded-lg font-semibold text-sm hover:bg-gray-800 dark:hover:bg-gray-100 
                           transition-colors duration-200 transform hover:scale-[1.02] active:scale-95
                           disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                           focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <LoadingSpinner size="small" />
                      <span>Creando cuenta...</span>
                    </div>
                  ) : (
                    'Registrarse'
                  )}
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Footer - EXACTO IGUAL QUE LOGIN */}
        <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-600 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            ¿Ya tienes una cuenta?{' '}
            <Link 
              to="/login" 
              className="text-gray-900 dark:text-white font-semibold hover:text-gray-700 dark:hover:text-gray-300 
                       transition-colors duration-200"
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;