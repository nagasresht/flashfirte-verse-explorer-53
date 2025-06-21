import { CalendarDays, Clock, Monitor } from "lucide-react";

const EventDateCard = () => {
  const today = new Date();
  const eventStartDate = new Date("2025-06-28");

  // Get time difference in milliseconds
  const timeDiff = eventStartDate.getTime() - today.getTime();

  // Convert to full days (floor so it doesn't round up)
  const daysToGo = Math.max(0, Math.floor(timeDiff / (1000 * 60 * 60 * 24)));

  return (
    <div className="bg-zinc-900 text-white p-4   rounded-xl shadow-lg border border-yellow-600 max-w-sm mx-auto mt-32 md:mt-40 lg:mt-44">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-yellow-400 text-lg font-semibold">JUNE 2025</h3>
        <CalendarDays className="text-yellow-400 w-6 h-6" />
      </div>

      <div className="flex justify-center items-end space-x-4 mb-4">
        <div className="text-center">
          <div className="text-5xl font-bold text-yellow-500">28</div>
          <div className="uppercase text-sm text-gray-400">Fri</div>
        </div>
        <span className="text-4xl font-bold text-gray-500">&</span>
        <div className="text-center">
          <div className="text-5xl font-bold text-yellow-500">29</div>
          <div className="uppercase text-sm text-gray-400">Sat</div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 flex justify-around text-sm text-gray-300">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-yellow-400" />
          <span>{daysToGo === 0 ? "Today!" : `${daysToGo} Day${daysToGo > 1 ? "s" : ""} `}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Monitor className="w-4 h-4 text-yellow-400" />
          <span>Online</span>
        </div>
      </div>
    </div>
  );
};

export default EventDateCard;
