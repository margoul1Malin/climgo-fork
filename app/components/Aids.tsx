import Link from 'next/link';

export default function Aids() {
    return (
      <section className="py-20 bgPage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Profitez des aides financières !
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <strong>Optimisez votre investissement</strong> grâce aux nombreuses <strong>subventions</strong> et <strong>avantages fiscaux</strong> disponibles pour vos travaux d&apos;amélioration énergétique. <strong>ClimGO vous accompagne pas à pas</strong> pour simplifier vos démarches et <strong>maximiser vos économies</strong>.
            </p>
          </div>
  
          {/* Aides financières en style inline */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* MaPrimeRénov' */}
              <div className="flex items-start space-x-4">
                <div className="climBg rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">MaPrimeRénov&apos;</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Une aide significative pour vos travaux d&apos;économie d&apos;énergie.
                  </p>
                </div>
              </div>
  
              {/* TVA réduite */}
              <div className="flex items-start space-x-4">
                <div className="climBg rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">TVA réduite</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bénéficiez d&apos;un taux réduit à 5,5% pour vos installations.
                  </p>
                </div>
              </div>
  
              {/* Certificats CEE */}
              <div className="flex items-start space-x-4">
                <div className="climBg rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Certificats d&apos;Économies d&apos;Énergie (CEE)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Obtenez un soutien financier complémentaire.
                  </p>
                </div>
              </div>
  
              {/* Éco-PTZ */}
              <div className="flex items-start space-x-4">
                <div className="climBg rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Éco-prêt à taux zéro (Éco-PTZ)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Financez vos travaux sans intérêts.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Call to Action */}
            <div className="text-center mt-12">
              <Link href="/aides-subventions-top-guide-2025/" className="climBg text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity font-medium text-lg">
                Découvrir toutes les aides →
              </Link>
              <p className="text-lg text-gray-700 mt-6">
                <strong>ClimGO</strong>, votre partenaire <strong>confort</strong> et <strong>économies</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }