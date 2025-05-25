import { Link } from 'react-router-dom';

export default function AboutTeaser() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">About Rudra Films GFX</h2>
      <p className="text-gray-700 mb-6 max-w-xl mx-auto">
        We are passionate storytellers with a commitment to capturing moments that matter. From corporate events to government functions, our cinematic style brings your stories to life.
      </p>
      <Link
        to="/about"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium transition"
      >
        Learn More About Us
      </Link>
    </section>
  );
}
