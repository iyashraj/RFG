const testimonials = [
  {
    name: 'Anita Sharma',
    role: 'Corporate Client',
    feedback: 'Rudra Films GFX captured our annual conference beautifully. The quality and professionalism were outstanding!',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Ravi Patel',
    role: 'Government Official',
    feedback: 'Excellent service with timely delivery. Their drone shots added a spectacular perspective to our event.',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Neha Verma',
    role: 'Event Organizer',
    feedback: 'Highly recommended for any corporate event. The team was cooperative and creative throughout.',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map(({ name, role, feedback, image }, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <img
              src={image}
              alt={name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <p className="text-gray-700 mb-4 italic">"{feedback}"</p>
            <p className="font-semibold text-indigo-700">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
