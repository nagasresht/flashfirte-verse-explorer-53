
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Schedule = () => {
  const scheduleData = [
    {
      day: "Day 1",
      date: "March 15, 2024",
      events: [
        { time: "09:00", title: "Registration Opens", type: "general" },
        { time: "10:00", title: "Opening Ceremony", type: "general" },
        { time: "11:00", title: "Ideathon Begins", type: "ideathon" },
        { time: "11:00", title: "Speakathon Begins", type: "speakathon" },
        { time: "14:00", title: "Lunch Break", type: "general" },
        { time: "15:00", title: "Workshops", type: "general" }
      ]
    },
    {
      day: "Day 2",
      date: "March 16, 2024",
      events: [
        { time: "09:00", title: "Design Realm Opens", type: "design" },
        { time: "10:00", title: "Gamingverse Tournament", type: "gaming" },
        { time: "14:00", title: "Final Presentations", type: "general" },
        { time: "17:00", title: "Awards Ceremony", type: "general" },
        { time: "19:00", title: "Closing Celebration", type: "general" }
      ]
    }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case "ideathon": return "border-l-orange-500 bg-orange-500/10";
      case "speakathon": return "border-l-cyan-500 bg-cyan-500/10";
      case "design": return "border-l-purple-500 bg-purple-500/10";
      case "gaming": return "border-l-pink-500 bg-pink-500/10";
      default: return "border-l-gray-500 bg-gray-500/10";
    }
  };

  return (
    <section className="py-20 px-4 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent">
            Schedule
          </h2>
          <p className="text-gray-400 text-lg">
            Plan your journey through the multiverse
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {scheduleData.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, x: dayIndex === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-700 hover:border-orange-500/50 transition-all duration-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-6 h-6 text-orange-500 mr-3" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{day.day}</h3>
                      <p className="text-gray-400">{day.date}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {day.events.map((event, eventIndex) => (
                      <motion.div
                        key={eventIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: eventIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 10 }}
                        className={`p-4 border-l-4 rounded-r-lg ${getEventColor(event.type)} hover:shadow-lg transition-all duration-300`}
                      >
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-orange-500 mr-3" />
                          <span className="text-orange-500 font-medium mr-4">
                            {event.time}
                          </span>
                          <span className="text-white font-medium">
                            {event.title}
                          </span>
                        </div>
                      </motion.div>
                    ))}
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

export default Schedule;
