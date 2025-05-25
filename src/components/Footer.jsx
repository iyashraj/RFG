import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        {/* Brand & Description */}
        <div className="max-w-xs">
          <h2 className="text-indigo-500 text-2xl font-bold mb-3">Rudra Films GFX</h2>
          <p className="text-gray-400">
            Premium photography and cinematic experiences for corporate and government events across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-indigo-500 transition">Home</a></li>
            <li><a href="/services" className="hover:text-indigo-500 transition">Services</a></li>
            <li><a href="/portfolio" className="hover:text-indigo-500 transition">Portfolio</a></li>
            <li><a href="/about" className="hover:text-indigo-500 transition">About</a></li>
            <li><a href="/contact" className="hover:text-indigo-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p>Email: <a href="mailto:info@rudrafilmsgfx.com" className="hover:text-indigo-500 transition">info@rudrafilmsgfx.com</a></p>
          <p>Phone: <a href="tel:+911234567890" className="hover:text-indigo-500 transition">+91 12345 67890</a></p>
          <p>Address: 123 Main Street, Mumbai, India</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaLinkedinIn /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Rudra Films GFX. All rights reserved.
      </div>
    </footer>
  );
}
