import React from "react";

function ProjectProgress() {
   return (
      <div className="bg-white rounded-lg p-6 border border-gray-200">
         <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Progress</h3>
         <div className="flex items-center justify-center">
            <div className="relative w-48 h-48">
               <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                     cx="50"
                     cy="50"
                     r="40"
                     stroke="#f3f4f6"
                     strokeWidth="8"
                     fill="none"
                  />
                  <circle
                     cx="50"
                     cy="50"
                     r="40"
                     stroke="#16a34a"
                     strokeWidth="8"
                     fill="none"
                     strokeDasharray={`${41 * 2.51} ${100 * 2.51}`}
                     strokeLinecap="round"
                  />
               </svg>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                     <div className="text-3xl font-bold text-gray-900">41%</div>
                     <div className="text-sm text-gray-500">Project Ended</div>
                  </div>
               </div>
            </div>
         </div>
         <div className="mt-6 flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
               <div className="w-3 h-3 bg-green-600 rounded-full"></div>
               <span className="text-gray-600">Completed</span>
            </div>
            <div className="flex items-center space-x-2">
               <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
               <span className="text-gray-600">In Progress</span>
            </div>
            <div className="flex items-center space-x-2">
               <div className="w-3 h-3 bg-gray-100 rounded-full border border-gray-300"></div>
               <span className="text-gray-600">Pending</span>
            </div>
         </div>
      </div>
   );
}

export default ProjectProgress;
