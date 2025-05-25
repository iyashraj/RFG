import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="bg-indigo-600 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Let’s Make Your Next Event Unforgettable
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          Get in touch with Rudra Films GFX for premium photography and cinematic services across India.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-indigo-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-full text-lg transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
