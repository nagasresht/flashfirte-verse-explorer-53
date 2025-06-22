import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const posters = [
  "/IDEATHON.png",
  "/gt.png",
  "/st.png",
  "/dt.png"
];

const routes = [
  "/ideathon",
  "/gamingverse",
  "/speakathon",
  "/design-realm" // must match route in App.tsx
];

const EventPosters = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
          Glimpses of the Realities
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Dive into the visual essence of our multiverse events
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posters.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300 cursor-pointer bg-black"
            >
              <img
                src={src}
                alt={`Event Poster ${index + 1}`}
                className="w-full max-h-96 object-contain bg-black hover:scale-105 transition-transform duration-500"
                onClick={() => setSelectedImage(src)}
              />
              <div className="p-4 text-center">
                <button
                  onClick={() => navigate(routes[index])}
                  className="mt-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal for Full Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-[1000] flex items-center justify-center px-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full View"
            className="w-full max-w-4xl max-h-[80vh] object-contain scale-95 transition-transform duration-300 rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default EventPosters;
