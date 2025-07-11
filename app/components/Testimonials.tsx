import { TbSnowflake, TbFlame, TbDroplet, TbTools } from 'react-icons/tb';

export default function Testimonials() {
  return (
    <section className="py-20 bgPage">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nos services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Chez <strong>ClimGO</strong>, nous vous accompagnons dans tous les domaines du <strong>confort thermique</strong> et <strong>sanitaire</strong> : <strong>chauffage</strong>, <strong>climatisation</strong>, <strong>eau chaude sanitaire</strong> et <strong>maintenance</strong>. Nos solutions sont pensées pour allier <strong>performance</strong>, <strong>durabilité</strong>, <strong>économies d&apos;énergie</strong> et <strong>sérénité</strong>, année après année.
          </p>
        </div>

        {/* Cards minimalistes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Climatisation */}
          <div className="bg-transparent rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <div className="climBg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TbSnowflake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Climatisation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Systèmes de climatisation haute performance pour un confort optimal. 
                <strong>Réversible</strong> pour chauffer en hiver et refroidir en été.
              </p>
            </div>
          </div>

          {/* Chauffage */}
          <div className="bg-transparent rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <div className="climBg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TbFlame className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Chauffage</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pompes à chaleur et planchers chauffants pour un <strong>chauffage écologique</strong> 
                et économique toute l&apos;année.
              </p>
            </div>
          </div>

          {/* Eau Chaude Sanitaire */}
          <div className="bg-transparent rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <div className="climBg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TbDroplet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Eau Chaude Sanitaire</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ballons thermodynamiques et cumulus électriques pour une <strong>eau chaude</strong> 
                disponible 24h/24 et économique.
              </p>
            </div>
          </div>

          {/* Maintenance */}
          <div className="bg-transparent rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <div className="climBg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TbTools className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Maintenance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Maintenance experte et <strong>garantie décennale</strong>. 
                Engagement sur 10 ans pour la tranquillité de vos équipements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 