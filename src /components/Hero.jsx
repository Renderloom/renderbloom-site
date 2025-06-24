import React from 'react';

function Hero() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Breathe Life Into Ideas with Renderbloom
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          We turn concepts into stunning 3D visualizations. Let’s build something beautiful together.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition">
          Get a Free Quote
        </button>
      </div>
    </section>
  );
}

export default Hero;
