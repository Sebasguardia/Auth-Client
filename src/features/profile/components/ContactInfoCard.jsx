// src/features/profile/components/ContactInfoCard.jsx
import React from 'react';

const ContactInfoCard = ({ profile }) => {
  return (
    <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl border border-white/20 overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      {/* Header con gradiente */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-4">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Contacto Corporativo
        </h3>
      </div>

      <div className="px-6 py-6">
        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-start space-x-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors duration-200">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-700 mb-1">Correo Electrónico</p>
              <a 
                href={`mailto:${profile.email}`} 
                className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 inline-flex items-center group"
              >
                {profile.email}
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Teléfono */}
          {profile.phone && (
            <div className="flex items-start space-x-4 p-4 bg-green-50/50 rounded-xl border border-green-100 hover:border-green-300 transition-colors duration-200">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-700 mb-1">Teléfono Directo</p>
                <a 
                  href={`tel:${profile.phone}`} 
                  className="text-green-600 hover:text-green-800 font-medium text-sm transition-colors duration-200 inline-flex items-center group"
                >
                  {profile.phone}
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;