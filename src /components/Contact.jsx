import React from 'react';

function Contact() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Get in Touch</h2>
        <form
          action="https://formsubmit.co/orders.renderbloom@gmail.com" // <- replace with your Gmail
          method="POST"
          className="space-y-6 bg-white p-8 shadow-lg rounded-xl"
        >
          {/* Prevent spam */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-1 p-3 borde
