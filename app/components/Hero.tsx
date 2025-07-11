"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setIsTransitioning] = useState(false);
  
  const bgImages = [
    "/sdb-pyla.jpeg",
    "/climcauderan.jpeg"
  ];


  // Animation de fond avec crossfade corrigée
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Attendre que la transition commence, puis changer l'image
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % bgImages.length);
        setIsTransitioning(false);
      }, 1000); // Durée de la transition crossfade
    }, 5000); // 5 secondes par image

    return () => clearInterval(interval);
  }, [bgImages.length]);

  // Générer l'initiale pour l'avatar


  return (
    <div className="flex flex-col min-h-screen absolute top-0 left-0 w-full h-full">
      
      <main className="flex-grow">
        {/* Hero Section avec carrousel d'images corrigé */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Images de fond avec système de crossfade */}
          {bgImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
              style={{ 
                backgroundImage: `url('${image}')`,
                opacity: currentIndex === index ? 1 : 0,
                transform: 'scale(1.05)', // Effet Ken Burns léger
                animation: currentIndex === index ? 'kenBurns 5s ease-in-out infinite alternate' : 'none'
              }}
            />
          ))}
          
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          
          <div className="relative z-20 text-center text-white px-4 md:px-8 animate-fade-in-up">
            <h1 className="text-6xl md:text-6xl font-bold my-12">
              ClimGO
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Installateur de Chauffage, Climatisation & Pompe à chaleur
            </h2>
            <nav className="flex flex-col sm:flex-row justify-center gap-4 space-x-16 my-8 text-center">
              <Link href="/services/chauffage" className="w-full text-center text-white font-serif text-2xl py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Chauffage
              </Link>
              <Link href="/services/chauffage" className="w-full text-center text-white font-serif text-2xl py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Climatisation
              </Link>
              <Link href="/services/chauffage" className="w-full text-center text-white font-serif text-2xl py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Pompe à chaleur
              </Link>
              <Link href="/services/chauffage" className="w-full text-center text-white font-serif text-2xl py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Eau chaude sanitaire
              </Link>
              <Link href="/services/chauffage" className="w-full text-center text-white font-serif text-2xl py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Maintenance
              </Link>

            </nav>
       
          </div>
          
          {/* Animation Ken Burns en CSS */}
          <style jsx>{`
            @keyframes kenBurns {
              0% { transform: scale(1.05); }
              100% { transform: scale(1.15); }
            }
            
            @keyframes fade-in-up {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            .animate-fade-in-up {
              animation: fade-in-up 1s ease-out;
            }
          `}</style>
        </section>
      </main>
    </div>
  );
}