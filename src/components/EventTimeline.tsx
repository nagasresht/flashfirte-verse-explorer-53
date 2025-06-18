
import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";

const EventTimeline = () => {
  const timelineEvents = [
    {
      time: "09:00 AM",
      title: "Registration & Welcome",
      description: "Check-in and opening ceremony",
      color: "from-orange-500 to-orange-600"
    },
    {
      time: "10:30 AM",
      title: "Portal Selection",
      description: "Choose your reality and join your team",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      time: "11:00 AM",
      title: "Multiverse Activation",
      description: "All events begin simultaneously",
      color: "from-purple-500 to-purple-600"
    },
    {
      time: "02:00 PM",
      title: "Cross-Reality Break",
      description: "Lunch and networking across dimensions",
      color: "from-pink-500 to-pink-600"
    },
    {
      time: "05:00 PM",
      title: "Reality Convergence",
      description: "Final presentations and judging",
      color: "from-orange-500 to-cyan-500"
    },
    {
      time: "07:00 PM",
      title: "Multiverse Celebration",
      description: "Awards ceremony and closing",
      color: "from-cyan-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent">
            Event Flow
          </h2>
          <p className="text-gray-400 text-lg">
            Journey through the multiverse timeline
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-orange-500 via-cyan-500 to-purple-500"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${event.color}`}>
                  <div className="w-full h-full rounded-full animate-pulse bg-white/20"></div>
                </div>
              </div>

              {/* Event Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <Clock className="w-5 h-5 text-orange-500 mr-2" />
                    <span className="text-orange-500 font-medium">{event.time}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400">{event.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EventTimeline;
