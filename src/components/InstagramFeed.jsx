export default function InstagramFeed() {
  const instaImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-8 text-center">Follow Us on Instagram</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {instaImages.map((src, i) => (
          <a
            key={i}
            href="https://instagram.com/rudrafilmsgfx"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img src={src} alt={`Instagram photo ${i + 1}`} className="w-full h-48 object-cover" />
          </a>
        ))}
      </div>
    </section>
  );
}
