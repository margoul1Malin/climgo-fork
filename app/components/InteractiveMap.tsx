'use client';

import dynamic from 'next/dynamic';

// Composant de carte qui sera chargé dynamiquement
const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Chargement de la carte...</p>
      </div>
    </div>
  )
});

export default function InteractiveMap() {
  return (
    <div className="w-full h-96 relative">
      {/* Overlay avec informations */}
      <div className="absolute top-4 left-4 z-[1000] bg-white rounded-lg shadow-lg p-4 max-w-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Zone d&apos;intervention ClimGO</h3>
        <p className="text-sm text-gray-600 mb-3">
          Nous intervenons entre <strong>Bordeaux</strong> et le <strong>Bassin d&apos;Arcachon</strong>
        </p>
        <div className="flex items-center space-x-2 text-sm text-gray-700">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span>Zones de service</span>
        </div>
      </div>

      {/* Bouton de contact */}
      <div className="absolute bottom-4 right-4 z-[1000]">
        <a
          href="tel:+33766460008"
          className="climBg text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity font-medium flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Nous contacter</span>
        </a>
      </div>

      {/* Carte Leaflet chargée dynamiquement */}
      <MapComponent />
    </div>
  );
} 