
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star } from "lucide-react";

const PreviousHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "AI Innovation Challenge",
      description: "200+ participants built revolutionary AI solutions",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      stats: "200+ Participants"
    },
    {
      id: 2,
      title: "Design Thinking Workshop",
      description: "Creative minds shaped the future of UX design",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      stats: "50+ Projects"
    },
    {
      id: 3,
      title: "Gaming Championship",
      description: "Epic battles in the ultimate gaming arena",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop",
      stats: "24 Teams"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent">
            Previous Year Highlights
          </h2>
          <p className="text-gray-400 text-lg">
            Relive the magic of FlashFirte's legendary moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-700 hover:border-orange-500/50 transition-all duration-500 overflow-hidden">
                <div className="relative">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-orange-500/20 backdrop-blur-sm rounded-full p-2">
                      <Trophy className="w-5 h-5 text-orange-500" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {highlight.description}
                  </p>
                  <div className="flex items-center text-cyan-400">
                    <Star className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{highlight.stats}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PreviousHighlights;
