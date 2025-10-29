// src/features/profile/pages/Profile.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../hooks/useProfile';
import { useAuth } from '../../auth/hooks/useAuth';
import UserInfoCard from '../components/UserInfoCard';
import ContactInfoCard from '../components/ContactInfoCard';
import SystemInfoCard from '../components/SystemInfoCard';
import QuickActionsCard from '../components/QuickActionsCard';
import LoadingState from '../components/LoadingState';
import ErrorState from '../components/ErrorState';

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
    return <LoadingState />;
  }

  if (!profile) {
    return (
      <ErrorState
        title="Error al cargar el perfil"
        message="No pudimos cargar la información de tu perfil. Por favor intenta nuevamente."
        onRetry={() => window.location.reload()}
        onGoHome={() => navigate('/')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Fondo animado corporativo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-200/15 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-slate-300/10 rounded-full blur-3xl animate-float-fast"></div>
        
        {/* Líneas de grid sutiles */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Corporativo */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm border border-white/20 mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
              Portal Corporativo
            </span>
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Gestión de <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Perfil</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Administra tu información profesional y configuraciones de cuenta corporativa
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          
          {/* Columna Lateral - Información Principal */}
          <div className="xl:col-span-1 space-y-8">
            <UserInfoCard profile={profile} onLogout={handleLogout} isLoggingOut={isLoggingOut} />
            <ContactInfoCard profile={profile} />
          </div>

          {/* Columna Principal - Información Detallada */}
          <div className="xl:col-span-3 space-y-8">
            <SystemInfoCard profile={profile} />
            <QuickActionsCard />
          </div>
        </div>
      </div>

      {/* Animaciones CSS */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(10px) translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Profile;