import { FaCameraRetro, FaRegSmile, FaRegClock, FaUsers } from 'react-icons/fa';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaCameraRetro size={30} className="text-indigo-600" />,
      title: 'Professional Equipment',
      description: 'Top-tier gear for stunning clarity and cinematic visuals.',
    },
    {
      icon: <FaRegSmile size={30} className="text-indigo-600" />,
      title: 'Client-Centric Approach',
      description: 'We tailor every shoot to reflect your vision.',
    },
    {
      icon: <FaRegClock size={30} className="text-indigo-600" />,
      title: 'Timely Delivery',
      description: 'Fast turnaround without compromising quality.',
    },
    {
      icon: <FaUsers size={30} className="text-indigo-600" />,
      title: 'Experienced Team',
      description: 'Skilled professionals for all types of event coverage.',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
