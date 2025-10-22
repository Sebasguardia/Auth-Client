// src/features/profile/pages/Profile.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../hooks/useProfile';
import { useAuth } from '../../auth/hooks/useAuth';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

// Iconos (puedes usar react-icons o SVG)
const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const EditIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Profile = () => {
  const { profile, loading } = useProfile();
  const { logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      setTimeout(() => {
        navigate('/login', { replace: true });
      }, 1000);
    } catch (error) {
      console.error('Error en logout:', error);
      setTimeout(() => {
        navigate('/login', { replace: true });
      }, 1000);
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
        <div className="text-center space-y-4">
          <LoadingSpinner size="large" />
          <p className="text-gray-600 text-lg">Cargando perfil...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center p-4">
        <Card className="text-center max-w-md w-full">
          <div className="text-4xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Error al cargar el perfil</h2>
          <p className="text-gray-600 text-sm mb-4">
            No se pudo cargar la información del perfil.
          </p>
          <Button 
            onClick={() => window.location.reload()} 
            className="w-full"
          >
            Recargar Página
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Mi Perfil</h1>
              <p className="text-gray-600 text-sm">Gestiona tu información personal</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-gray-50 rounded-lg px-4 py-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {profile.name?.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium text-gray-700">{profile.name}</span>
              </div>
              <Button 
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="bg-red-500 hover:bg-red-600 focus:ring-red-500 text-white"
              >
                {isLoggingOut ? (
                  <div className="flex items-center space-x-2">
                    <LoadingSpinner size="small" />
                    <span>Cerrando...</span>
                  </div>
                ) : (
                  'Cerrar Sesión'
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Columna Izquierda - Perfil Principal */}
          <div className="lg:col-span-1 space-y-6">
            {/* Tarjeta de Perfil */}
            <Card className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                {profile.name?.charAt(0).toUpperCase()}
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-1">{profile.name} {profile.paternal_lastname}</h2>
              <p className="text-gray-600 mb-3">{profile.role?.name}</p>
              <div className="flex items-center justify-center space-x-2 text-green-600 text-sm mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>En línea</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-lg font-bold text-gray-800">#{profile.id}</div>
                  <div className="text-xs text-gray-600">ID Usuario</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-lg font-bold text-gray-800">2024</div>
                  <div className="text-xs text-gray-600">Miembro desde</div>
                </div>
              </div>
            </Card>

            {/* Información de Contacto */}
            <Card>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <MailIcon />
                <span className="ml-2">Información de Contacto</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href={`mailto:${profile.email}`} className="text-blue-600 hover:text-blue-800 font-medium">
                      {profile.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Teléfono</p>
                    <a href={`tel:${profile.phone}`} className="text-green-600 hover:text-green-800 font-medium">
                      {profile.phone}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Columna Central - Información Personal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Información Personal */}
            <Card>
              <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                <UserIcon />
                <span className="ml-2">Información Personal</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoField label="Nombre" value={profile.name} icon={<UserIcon />} />
                <InfoField label="Apellido Paterno" value={profile.paternal_lastname} />
                <InfoField label="Apellido Materno" value={profile.maternal_lastname} />
                <InfoField label="Nombre de Usuario" value={profile.user_name} />
                <InfoField label="Número de Documento" value={profile.document_number} />
                <InfoField label="ID de Usuario" value={profile.id} />
              </div>
            </Card>

            {/* Información del Sistema */}
            <Card>
              <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                <ShieldIcon />
                <span className="ml-2">Información del Sistema</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">{profile.role?.name}</div>
                  <div className="text-sm text-gray-600">Rol del Sistema</div>
                  <div className="text-xs text-purple-500 mt-1">ID: {profile.role?.id}</div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{profile.country?.name}</div>
                  <div className="text-sm text-gray-600">País</div>
                  <div className="text-xs text-blue-500 mt-1">ID: {profile.country?.id}</div>
                </div>
              </div>
            </Card>

            {/* Acciones Rápidas */}
            <Card>
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Acciones Rápidas</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ActionButton icon={<EditIcon />} label="Editar Perfil" color="purple" />
                <ActionButton icon={<LockIcon />} label="Seguridad" color="blue" />
                <ActionButton icon={<DocumentIcon />} label="Documentos" color="green" />
                <ActionButton icon={<SettingsIcon />} label="Ajustes" color="orange" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componentes auxiliares
const InfoField = ({ label, value, icon }) => (
  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600 font-medium mb-1">{label}</p>
        <p className="text-gray-800 font-semibold">{value || 'No disponible'}</p>
      </div>
      {icon && (
        <div className="text-gray-400">
          {icon}
        </div>
      )}
    </div>
  </div>
);

const ActionButton = ({ icon, label, color = 'gray' }) => {
  const colorClasses = {
    purple: 'bg-purple-500 hover:bg-purple-600 text-white',
    blue: 'bg-blue-500 hover:bg-blue-600 text-white',
    green: 'bg-green-500 hover:bg-green-600 text-white',
    orange: 'bg-orange-500 hover:bg-orange-600 text-white',
    gray: 'bg-gray-500 hover:bg-gray-600 text-white'
  };

  return (
    <button className={`${colorClasses[color]} rounded-xl p-4 flex flex-col items-center justify-center space-y-2 transition-all duration-200 hover:scale-105 active:scale-95`}>
      <div className="text-white">
        {icon}
      </div>
      <span className="text-sm font-medium text-center">{label}</span>
    </button>
  );
};

export default Profile;