import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroBanner from '../assets/hero-banner.jpg'; 

export default function Hero() {
  return (
    <section className="relative bg-black text-white h-[90vh] overflow-hidden flex items-center">
      <img
        src={HeroBanner}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
        >
          Capturing Stories, Creating Memories
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto"
        >
          Rudra Films GFX delivers premium photography & cinematic experiences for corporate and government events across India.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg transition"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
