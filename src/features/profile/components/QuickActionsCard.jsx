// src/features/profile/components/QuickActionsCard.jsx
import React from 'react';

const QuickActionsCard = () => {
  const actions = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      label: "Editar Perfil",
      description: "Actualizar información corporativa",
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-600 to-blue-700"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      label: "Seguridad",
      description: "Gestionar acceso y permisos",
      color: "from-emerald-500 to-emerald-600",
      hoverColor: "from-emerald-600 to-emerald-700"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      label: "Documentos",
      description: "Archivos corporativos",
      color: "from-purple-500 to-purple-600",
      hoverColor: "from-purple-600 to-purple-700"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Configuración",
      description: "Preferencias del sistema",
      color: "from-orange-500 to-orange-600",
      hoverColor: "from-orange-600 to-orange-700"
    }
  ];

  return (
    <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl border border-white/20 overflow-hidden">
      {/* Header con gradiente */}
      <div className="bg-gradient-to-r from-slate-600 to-slate-700 px-6 py-4">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Acciones Corporativas
        </h3>
      </div>

      <div className="px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {actions.map((action, index) => (
            <button
              key={index}
              className={`group relative bg-gradient-to-r ${action.color} hover:${action.hoverColor} rounded-xl p-6 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden`}
            >
              {/* Efecto de brillo al hover */}
              <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors duration-200">
                  {action.icon}
                </div>
                <h4 className="font-semibold text-lg mb-2 text-white">{action.label}</h4>
                <p className="text-white/80 text-sm leading-tight">{action.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActionsCard;