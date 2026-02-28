function ProjectAnalytics() {
   const days = ["S", "M", "T", "W", "T", "F", "S"];
   const data = [0, 70, 74, 85, 0, 0, 0];
   const activeIndex = 2;

   return (
      <div className="bg-white rounded-lg p-6 border border-gray-200">
         <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Analytics</h3>

         <svg width="0" height="0" style={{ position: "absolute" }}>
            <defs>
               <pattern
                  id="hatch"
                  patternUnits="userSpaceOnUse"
                  width="6"
                  height="6"
                  patternTransform="rotate(45)"
               >
                  <line x1="0" y1="0" x2="0" y2="6" stroke="#d1d5db" strokeWidth="2.5" />
               </pattern>
            </defs>
         </svg>

         <div className="flex items-end justify-between space-x-2">
            {days.map((day, index) => {
               const fill = data[index];
               const isActive = index === activeIndex;
               const isFilled = fill > 0;

               return (
                  <div
                     key={index}
                     className="flex flex-col items-center space-y-2 flex-1"
                  >
                     <div className="h-6 flex items-center justify-center">
                        {isActive && (
                           <div className="bg-white border border-gray-200 rounded px-1.5 py-0.5 text-xs text-gray-700 shadow-sm whitespace-nowrap">
                              {fill}%
                           </div>
                        )}
                     </div>

                     <div
                        className="w-full rounded-3xl overflow-hidden relative"
                        style={{ height: "120px" }}
                     >
                        {isFilled ? (
                           <>
                              <div
                                 className="absolute top-0 w-full rounded-t-3xl"
                                 style={{
                                    height: `${100 - fill}%`,
                                    background: "url(#hatch)",
                                    backgroundColor: "#f3f4f6",
                                    backgroundImage:
                                       "repeating-linear-gradient(45deg, #d1d5db 0, #d1d5db 1px, transparent 0, transparent 50%)",
                                    backgroundSize: "6px 6px",
                                 }}
                              />

                              <div
                                 className="absolute bottom-0 w-full rounded-b-3xl"
                                 style={{
                                    height: `${fill}%`,
                                    backgroundColor: isActive ? "#4ade80" : "#16a34a",
                                    borderRadius:
                                       fill === 100 ? "1.5rem" : "0 0 1.5rem 1.5rem",
                                 }}
                              />
                           </>
                        ) : (
                           <div
                              className="w-full h-full rounded-3xl"
                              style={{
                                 backgroundImage:
                                    "repeating-linear-gradient(45deg, #d1d5db 0, #d1d5db 1px, transparent 0, transparent 50%)",
                                 backgroundSize: "6px 6px",
                                 backgroundColor: "#f9fafb",
                              }}
                           />
                        )}
                     </div>

                     <span className="text-xs text-gray-500 font-medium">{day}</span>
                  </div>
               );
            })}
         </div>
      </div>
   );
}

export default ProjectAnalytics;
