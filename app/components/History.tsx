import Link from "next/link";

export default function History() {
  return (
    <section className="py-20 bgPage">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Fondateur de ClimGO
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-12 items-center">            

            {/* Texte de présentation */}
            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Passionné par mon métier depuis plus de 10 ans, je mets mon <strong>expérience</strong> et mon <strong>savoir-faire</strong> à votre disposition pour assurer votre confort au quotidien. <strong>Proximité</strong>, <strong>sérieux</strong> et <strong>qualité</strong> guident chacun de mes projets.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  <strong>Je serai ravi de vous rencontrer.</strong>
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center space-x-4">
                  <div className="climBg rounded-full w-10 h-10 flex items-center justify-center">
                    <Link href="/contact">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    </Link>
                  </div>
                  <span className="text-gray-700 font-medium">Contactez-moi directement</span>
                  <button className="climBg text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity font-medium text-lg flex items-center mx-auto md:mx-0">
                    Notre histoire
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 