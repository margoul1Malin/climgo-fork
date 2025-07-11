'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Barre supérieure avec bouton d'appel et réseaux sociaux */}
      <div className="climBg shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Bouton d'appel */}
            <Link href="/contact" className="flex items-center space-x-2">
              <button className="bg-white climText px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-bold">NOUS APPELER</button>
            </Link>

            {/* Réseaux sociaux */}
            <div className="flex items-center px-4 py-2 gap-3">
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 bg-white transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1877F2" className="hover:opacity-80 transition-opacity">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/climgo_climatisation_chauffage" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 bg-white transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="url(#instagram-gradient)" className="hover:opacity-80 transition-opacity">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#833ab4"/>
                      <stop offset="50%" stopColor="#fd1d1d"/>
                      <stop offset="100%" stopColor="#fcb045"/>
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 bg-white transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0077B5" className="hover:opacity-80 transition-opacity">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section transparente avec logo et navigation flottante */}
      <div className="bg-transparent shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo à gauche avec marges */}
            <div className="mx-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/Logo.png"
                  alt="ClimGO Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Navigation flottante à droite */}
            <div className="climBg rounded-full px-6 py-3 shadow-lg">
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-white hover:text-blue-200 transition-colors text-sm font-medium">
                  Accueil
                </Link>
                <div className="relative group">
                  <Link href="/services" className="text-white hover:text-blue-200 transition-colors flex items-center text-sm font-medium">
                    Nos Services
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link href="/chauffage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Chauffage
                      </Link>
                      <Link href="/climatisation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Climatisation
                      </Link>
                      <Link href="/eau-chaude-sanitaire" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Eau chaude sanitaire
                      </Link>
                      <Link href="/maintenance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Maintenance
                      </Link>
                    </div>
                  </div>
                </div>
                <Link href="/aides-etat" className="text-white hover:text-blue-200 transition-colors text-sm font-medium">
                  Aides d&apos;État
                </Link>
                <Link href="/a-propos" className="text-white hover:text-blue-200 transition-colors text-sm font-medium">
                  À Propos
                </Link>
                <Link href="/contact" className="text-white hover:text-blue-200 transition-colors text-sm font-medium">
                  Contact
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-white hover:text-blue-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <div className="climBg rounded-lg p-4 shadow-lg">
                <div className="flex flex-col space-y-3">
                  <Link href="/" className="text-white hover:text-blue-200 transition-colors text-sm">
                    Accueil
                  </Link>
                  <div className="space-y-2">
                    <Link href="/services" className="text-white font-medium text-sm hover:text-blue-200 transition-colors">
                      Nos Services
                    </Link>
                    <div className="pl-4 space-y-2">
                      <Link href="/chauffage" className="block text-blue-200 hover:text-white transition-colors text-sm">
                        Chauffage
                      </Link>
                      <Link href="/climatisation" className="block text-blue-200 hover:text-white transition-colors text-sm">
                        Climatisation
                      </Link>
                      <Link href="/eau-chaude-sanitaire" className="block text-blue-200 hover:text-white transition-colors text-sm">
                        Eau chaude sanitaire
                      </Link>
                      <Link href="/maintenance" className="block text-blue-200 hover:text-white transition-colors text-sm">
                        Maintenance
                      </Link>
                    </div>
                  </div>
                  <Link href="/aides-etat" className="text-white hover:text-blue-200 transition-colors text-sm">
                    Aides d&apos;État
                  </Link>
                  <Link href="/a-propos" className="text-white hover:text-blue-200 transition-colors text-sm">
                    À Propos
                  </Link>
                  <Link href="/contact" className="text-white hover:text-blue-200 transition-colors text-sm">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
} 