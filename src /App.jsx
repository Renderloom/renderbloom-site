import React from "react";

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-black text-white h-screen flex items-center justify-center flex-col text-center">
        <h1 className="text-5xl font-bold mb-4">Renderbloom</h1>
        <p className="text-xl mb-6 max-w-xl">
          Photorealistic 3D renders, product modeling, animation & more — done fast, done right.
        </p>
        <a href="#services" className="bg-white text-black px-6 py-2 rounded-full font-semibold">
          Explore Services
        </a>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          <ServiceCard title="3D Rendering" description="Photorealistic interiors, exteriors & product visuals." />
          <ServiceCard title="Product Modeling" description="Clean, precise models for ecommerce & production." />
          <ServiceCard title="2D/3D Animation" description="Engaging animations to bring your vision to life." />
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <p>Email us at <a href="mailto:hello@renderbloom.com" className="text-blue-600 underline">hello@renderbloom.com</a></p>
      </section>

      <footer className="py-6 bg-black text-white text-center">
        <p>&copy; 2025 Renderbloom. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default App;
    