function ProjectAnalytics() {
   const days = ["M", "T", "W", "T", "F", "S", "S"];
   const data = [40, 80, 60, 90, 45, 70, 55];

   return (
      <div className="bg-white rounded-lg p-6 border border-gray-200">
         <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Analytics</h3>
         <div className="flex items-end justify-between h-40 space-x-2">
            {days.map((day, index) => (
               <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                  <div
                     className="w-full bg-gray-100 rounded-t-lg relative overflow-hidden"
                     style={{ height: "120px" }}
                  >
                     <div
                        className="bg-green-600 rounded-t-lg absolute bottom-0 w-full transition-all duration-300"
                        style={{ height: `${data[index]}%` }}
                     ></div>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">{day}</span>
               </div>
            ))}
         </div>
      </div>
   );
}

export default ProjectAnalytics;
