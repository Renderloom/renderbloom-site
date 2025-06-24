import React from 'react';

const services = [
  {
    title: '3D Architectural Rendering',
    description: 'Photorealistic renderings for real estate, exteriors, interiors, and architecture.',
  },
  {
    title: 'Product Visualization',
    description: 'Stunning 3D visuals of consumer products to showcase your ideas to the world.',
  },
  {
    title: 'Jewelry Modeling',
    description: 'Detailed and intricate renderings of custom jewelry and accessories.',
  },
  {
    title: 'Furniture Design',
    description: 'Modern, minimal or luxurious furniture designs rendered with high realism.',
  },
  {
    title: '2D & 3D Animation',
    description: 'Animated walkthroughs or product intros to elevate your presentations.',
  },
  {
    title: 'Photo Editing & Enhancement',
    description: 'Bring life to your images with expert retouching and color correction.',
  },
];

function Services() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
