import React from "react";

const Schedule = () => {
  return (
    <section className="py-20 bg-black text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent">
          Event Schedule
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Day 1 */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-orange-400">Day 1 - June 28</h3>
            <ul className="space-y-4">
              <li>
                <p className="text-lg">
                  <span className="font-semibold text-cyan-400">Idea-A-Thon :</span>  9:00 AM-12:00 PM
                </p>
              </li>
              <li>
                <p className="text-lg">
                  <span className="font-semibold text-cyan-400">Speak-A-Thon :</span> 9:00 AM-12:00 PM
                </p>
              </li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-orange-400">Day 2 - June 29</h3>
            <ul className="space-y-4">
              <li>
                <p className="text-lg">
                  <span className="font-semibold text-cyan-400">Design-A-Thon :</span> 9:00 AM-12:00 PM
                </p>
              </li>
              <li>
                <p className="text-lg">
                  <span className="font-semibold text-cyan-400">Game-A-Thon :</span>  9:00 AM-12:00 PM
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Schedule;
// import React from "react";

// const Schedule = () => {
//   return (
//     <section className="py-20 bg-black text-white px-6">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent">
//           Event Schedule
//         </h2>

//         {/* Day 1 */}
//         <div className="mb-12">
//           <h3 className="text-2xl font-extrabold text-orange-400 border-b border-orange-600 pb-2 mb-6">
//             Day 1 — June 28
//           </h3>
//           <div className="grid grid-cols-3 gap-4 text-lg font-semibold">
//             <div className="text-cyan-400">Morning</div>
//             <div className="col-span-2">Design A Thon</div>

//             <div className="text-cyan-400">Post Lunch</div>
//             <div className="col-span-2">Game A Thon</div>
//           </div>
//         </div>

//         {/* Day 2 */}
//         <div>
//           <h3 className="text-2xl font-extrabold text-orange-400 border-b border-orange-600 pb-2 mb-6">
//             Day 2 — June 29
//           </h3>
//           <div className="grid grid-cols-3 gap-4 text-lg font-semibold">
//             <div className="text-cyan-400">Morning</div>
//             <div className="col-span-2">Idea A Thon</div>

//             <div className="text-cyan-400">Post Lunch</div>
//             <div className="col-span-2">Speak A Thon</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

 export default Schedule;