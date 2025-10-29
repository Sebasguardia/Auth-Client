// src/features/profile/components/UserInfoCard.jsx
import React from 'react';

const UserInfoCard = ({ profile, onLogout, isLoggingOut }) => {
  return (
    <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl border border-white/20 overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      {/* Header con gradiente corporativo */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Perfil Corporativo
        </h3>
      </div>

      <div className="px-6 py-8">
        {/* Avatar y Información Básica */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4">
              {profile.name?.charAt(0).toUpperCase()}
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 mb-1">
            {profile.name} {profile.paternal_lastname}
          </h3>
          <p className="text-sm text-slate-600 mb-3">{profile.role?.name}</p>
          
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-50 text-green-700 border border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Activo - En línea
          </div>
        </div>

        {/* Información del Usuario */}
        <div className="mt-8 space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-slate-100">
            <div className="flex items-center text-slate-600">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
              <span className="text-sm font-medium">ID Usuario</span>
            </div>
            <span className="text-sm font-semibold text-slate-900">#{profile.id}</span>
          </div>
          
          <div className="flex justify-between items-center py-3 border-b border-slate-100">
            <div className="flex items-center text-slate-600">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm font-medium">Usuario</span>
            </div>
            <span className="text-sm font-semibold text-slate-900">{profile.user_name}</span>
          </div>
          
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center text-slate-600">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm font-medium">Documento</span>
            </div>
            <span className="text-sm font-semibold text-slate-900">{profile.document_number}</span>
          </div>
        </div>

        {/* Botón de Cerrar Sesión */}
        <button
          onClick={onLogout}
          disabled={isLoggingOut}
          className="w-full mt-6 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-xl hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          {isLoggingOut ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Finalizando Sesión...
            </>
          ) : (
            <>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Cerrar Sesión Corporativa
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default UserInfoCard;