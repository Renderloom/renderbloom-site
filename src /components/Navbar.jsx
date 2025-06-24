import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">Renderbloom</div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/services" className="hover:text-gray-400">Services</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
      </div>
    </nav>
  );
}
