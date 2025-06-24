export default function Contact() {
  return (
    <div className="p-10 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input className="w-full border p-2" type="text" placeholder="Your Name" />
        <input className="w-full border p-2" type="email" placeholder="Your Email" />
        <textarea className="w-full border p-2" rows="5" placeholder="Your Message"></textarea>
        <button className="bg-black text-white px-6 py-2 rounded">Send</button>
      </form>
    </div>
  );
}
