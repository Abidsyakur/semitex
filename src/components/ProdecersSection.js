import React from 'react';

const ProducersSection = () => {
  const producers = [
    { logo: '/path/to/logo1.png', name: 'Producer 1' },
    { logo: '/path/to/logo2.png', name: 'Producer 2' },
    { logo: '/path/to/logo3.png', name: 'Producer 3' },
    { logo: '/path/to/logo4.png', name: 'Producer 4' },
    { logo: '/path/to/logo5.png', name: 'Producer 5' },
  ];

  return (
    <section className="relative bg-blue-700 text-white py-16">
      {/* Wave Effect */}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#3366FF"
            fillOpacity="1"
            d="M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,69.3C672,75,768,117,864,149.3C960,181,1056,203,1152,181.3C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-12">Наши производители</h2>
        
        {/* Producers Row */}
        <div className="grid grid-cols-5 gap-2 items-center">
          {producers.map((producer, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={producer.logo}
                alt={producer.name}
                className="h-16 md:h-20 object-contain bg-white p-4 rounded shadow-md"
              />
              <p className="mt-4 text-sm font-semibold">{producer.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProducersSection;
