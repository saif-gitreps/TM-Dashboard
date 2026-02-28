function ProjectProgress() {
   return (
      <div className="bg-white rounded-lg p-6 border border-gray-200">
         <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Progress</h3>

         <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[200px]">
               <svg viewBox="0 0 100 100" className="w-full h-auto -rotate-90">
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
                     <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                        41%
                     </div>
                     <div className="text-xs sm:text-sm text-gray-500">Project Ended</div>
                  </div>
               </div>
            </div>
         </div>

         <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            <div className="flex items-center space-x-2">
               <div className="w-3 h-3 bg-green-600 rounded-full shrink-0" />
               <span className="text-gray-600">Completed</span>
            </div>
            <div className="flex items-center space-x-2">
               <div className="w-3 h-3 bg-gray-300 rounded-full shrink-0" />
               <span className="text-gray-600">In Progress</span>
            </div>
            <div className="flex items-center space-x-2">
               <div className="w-3 h-3 bg-gray-100 rounded-full border border-gray-300 shrink-0" />
               <span className="text-gray-600">Pending</span>
            </div>
         </div>
      </div>
   );
}

export default ProjectProgress;
