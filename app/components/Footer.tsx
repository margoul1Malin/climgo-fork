import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/aides-etat" className="text-gray-300 hover:text-white transition-colors">
                  Aides d&apos;État
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/chauffage" className="text-gray-300 hover:text-white transition-colors">
                  Chauffage
                </Link>
              </li>
              <li>
                <Link href="/climatisation" className="text-gray-300 hover:text-white transition-colors">
                  Climatisation
                </Link>
              </li>
              <li>
                <Link href="/eau-chaude-sanitaire" className="text-gray-300 hover:text-white transition-colors">
                  Eau chaude sanitaire
                </Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-gray-300 hover:text-white transition-colors">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <a href="tel:+33766460008" className="hover:text-white transition-colors">
                  +33 (0)7 66 46 00 08
                </a>
              </p>
              <p className="text-gray-300">
                <a href="mailto:accueil@climgo.fr" className="hover:text-white transition-colors">
                  accueil@climgo.fr
                </a>
              </p>
              <p className="text-gray-300">
                Entre Bordeaux et le Bassin d&apos;Arcachon
              </p>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297C4.243 14.814 3.5 13.455 3.5 11.987c0-1.468.743-2.827 1.621-3.704.88-.807 2.031-1.297 3.328-1.297 1.297 0 2.448.49 3.328 1.297.878.877 1.621 2.236 1.621 3.704 0 1.468-.743 2.827-1.621 3.704-.88.807-2.031 1.297-3.328 1.297zm7.718-6.695c-.878-.877-2.031-1.367-3.328-1.367-1.297 0-2.448.49-3.328 1.367-.878.877-1.621 2.236-1.621 3.704 0 1.468.743 2.827 1.621 3.704.88.877 2.031 1.367 3.328 1.367 1.297 0 2.448-.49 3.328-1.367.878-.877 1.621-2.236 1.621-3.704 0-1.468-.743-2.827-1.621-3.704z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
              <Link href="/mentions-legales" className="text-gray-300 hover:text-white transition-colors text-sm">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-300 hover:text-white transition-colors text-sm">
                Politique de confidentialité
              </Link>
              <Link href="/conditions-generales" className="text-gray-300 hover:text-white transition-colors text-sm">
                Conditions générales de ventes
              </Link>
              <Link href="/zones-desservies" className="text-gray-300 hover:text-white transition-colors text-sm">
                Zones desservies
              </Link>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 ClimGO. Tous droits réservés.
            </div>
          </div>
        </div>

        {/* Cookie Notice */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <p className="text-gray-300 text-sm text-center">
            On n&apos;a pas mis de cookies dans le café, mais sur le site oui. C&apos;est juste pour faire tourner le site comme une PAC bien installée. Vous pouvez tout accepter ou régler vos préférences.
          </p>
        </div>
      </div>
    </footer>
  );
} 