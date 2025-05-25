export default function Services() {
  const services = [
    {
      title: "Photography",
      description: "Professional photography for corporate and government events, capturing every moment with precision.",
      icon: "📸",
    },
    {
      title: "Videography",
      description: "Cinematic video coverage to tell your event’s story with clarity and emotion.",
      icon: "🎥",
    },
    {
      title: "Drone Coverage",
      description: "Aerial shots and dynamic angles with our expert drone pilots.",
      icon: "🚁",
    },
    {
      title: "Multi-Camera Setup",
      description: "Multiple camera angles for comprehensive event coverage.",
      icon: "📹",
    },
    {
      title: "Live Streaming",
      description: "Broadcast your event live with high-quality streaming services.",
      icon: "📡",
    },
    {
      title: "Reels & Editing",
      description: "Creative reels and professional editing to showcase highlights and promos.",
      icon: "✂️",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(({ title, description, icon }) => (
            <div key={title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
