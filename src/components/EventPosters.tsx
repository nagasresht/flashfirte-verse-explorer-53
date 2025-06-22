import { motion } from "framer-motion";

const posters = [
  "/IDEATHON.png",
  "/IDEATHON.png",
  "/IDEATHON.png",
  "/IDEATHON.png"
];

const EventPosters = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
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
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
            >
              <img
                src={src}
                alt={`Event Poster ${index + 1}`}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EventPosters;
