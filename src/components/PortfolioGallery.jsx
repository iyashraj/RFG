import { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: "Corporate Event",
    category: "Corporate",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    fullImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 2,
    title: "Drone Aerial Shot",
    category: "Drone",
    thumbnail: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80",
    fullImage: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 3,
    title: "Live Streaming Setup",
    category: "Events",
    thumbnail: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80",
    fullImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 4,
    title: "Wedding Photography",
    category: "Wedding",
    thumbnail: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    fullImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 5,
    title: "Cinematic Videography",
    category: "Cinematic",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    fullImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 6,
    title: "Drone Landscape",
    category: "Drone",
    thumbnail: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80",
    fullImage: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 7,
    title: "Corporate Team Shoot",
    category: "Corporate",
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    fullImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 8,
    title: "Outdoor Live Event",
    category: "Events",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    fullImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 9,
    title: "Documentary Filming",
    category: "Cinematic",
    thumbnail: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80",
    fullImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=90",
  },
];

const categories = ["All", "Corporate", "Drone", "Events", "Wedding", "Cinematic"];

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <section className="py-16 bg-white text-gray-900 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-indigo-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map(({ id, title, thumbnail }) => (
            <div
              key={id}
              className="cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              onClick={() => setSelectedItem(id)}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedItem(id)}
              aria-label={`View full image of ${title}`}
            >
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <h3 className="mt-2 text-center font-medium">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative max-w-4xl max-h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold focus:outline-none"
              aria-label="Close gallery"
            >
              &times;
            </button>
            <img
              src={portfolioItems.find(item => item.id === selectedItem).fullImage}
              alt={portfolioItems.find(item => item.id === selectedItem).title}
              className="max-w-full max-h-[80vh] rounded"
            />
            <h3
              id="modal-title"
              className="text-white text-center mt-4 text-xl font-semibold"
            >
              {portfolioItems.find(item => item.id === selectedItem).title}
            </h3>
          </div>
        </div>
      )}
    </>
  );
}
