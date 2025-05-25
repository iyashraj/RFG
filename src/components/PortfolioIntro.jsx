import { Link } from 'react-router-dom';

export default function PortfolioIntro() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Our Work Speaks for Itself</h2>
      <p className="text-gray-700 mb-8 max-w-xl mx-auto">
        Explore our portfolio to see stunning photography and cinematic visuals captured at corporate and government events across India.
      </p>
      <Link
        to="/portfolio"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium transition"
      >
        View Portfolio
      </Link>
    </section>
  );
}
