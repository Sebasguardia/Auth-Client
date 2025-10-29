// src/features/profile/components/SystemInfoCard.jsx
import React from 'react';

const SystemInfoCard = ({ profile }) => {
  return (
    <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl border border-white/20 overflow-hidden">
      {/* Header con gradiente */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 px-6 py-4">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Información del Sistema
        </h3>
      </div>

      <div className="px-6 py-6">
        {/* Tarjetas de Rol y País */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Rol del Sistema */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50 hover:border-blue-300 transition-all duration-300 transform hover:scale-[1.02]">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center text-blue-700 mb-2">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm font-semibold uppercase tracking-wide">Rol Corporativo</span>
                </div>
                <p className="text-2xl font-bold text-slate-900 mb-1">{profile.role?.name}</p>
                <p className="text-xs text-blue-600 font-medium">ID: {profile.role?.id}</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* País */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200/50 hover:border-emerald-300 transition-all duration-300 transform hover:scale-[1.02]">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center text-emerald-700 mb-2">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-semibold uppercase tracking-wide">Ubicación</span>
                </div>
                <p className="text-2xl font-bold text-slate-900 mb-1">{profile.country?.name}</p>
                <p className="text-xs text-emerald-600 font-medium">ID: {profile.country?.id}</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Información Adicional */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoField 
            label="ID de Usuario" 
            value={profile.id} 
            icon="🔑"
          />
          <InfoField 
            label="Nombre de Usuario" 
            value={profile.user_name} 
            icon="👤"
          />
          <InfoField 
            label="Número de Documento" 
            value={profile.document_number} 
            icon="📄"
          />
          <InfoField 
            label="Apellido Materno" 
            value={profile.maternal_lastname || 'No especificado'} 
            icon="🏷️"
          />
        </div>
      </div>
    </div>
  );
};

const InfoField = ({ label, value, icon }) => (
  <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/50 hover:border-slate-300 transition-all duration-200 group">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-slate-700 mb-1 flex items-center">
          <span className="text-lg mr-2">{icon}</span>
          {label}
        </p>
        <p className="text-slate-900 font-bold text-lg">{value}</p>
      </div>
      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
    </div>
  </div>
);

export default SystemInfoCard;