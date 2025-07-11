"use client";
import Image from 'next/image';
import React from 'react';

export default function Partenaires() {
  return (
    <section className="py-20 bgPage">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Nos marques partenaires :
        </h2>
        <CarouselMarques />
      </div>
    </section>
  );
}
const CarouselMarques: React.FC = () => {
  const images: { src: string; alt: string }[] = [
    { src: "/HeiwaLogo.png", alt: "Heiwa" },
    { src: "/DaikinLogo.png", alt: "Daikin" },
    { src: "/Mitsubishi-Electric-Logo.png", alt: "Mitsubishi Electric" },
  ];
  
  const [index, setIndex] = React.useState(0);
  const [isFading, setIsFading] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      
      // Délai pour le fade out, puis changement d'image
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 300); // 300ms pour le fade out
      
    }, 4000); // 5 secondes par image
    
    return () => clearInterval(timer);
  }, [images.length]); // Seulement dépendant de images.length

  return (
    <div className="carousel-container relative min-h-[320px] max-w-2xl mx-auto flex items-center justify-center">
        <Image
          width={1000}
          height={500}
          src={images[index].src}
          alt={images[index].alt}
          className={`carousel-image ${isFading ? 'fade-out' : 'fade-in'} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain 
            max-h-32 max-w-xs 
            sm:max-h-40 sm:max-w-md 
            md:max-h-[320px] md:max-w-[1000px] 
            w-auto h-auto select-none`}
          style={{
            opacity: isFading ? 0 : 1,
            transition: 'opacity 300ms ease-in-out',
          }}
        />
      </div>
  );
};