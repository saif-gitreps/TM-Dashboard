import { Pause, Square } from "lucide-react";
function TimeTracker() {
   return (
      <div className="bg-green-900 rounded-lg p-6 text-white">
         <h3 className="text-lg font-semibold mb-6">Time Tracker</h3>
         <div className="text-center mb-6">
            <div className="text-4xl font-bold mb-2">01:24:08</div>
            <div className="w-full h-2 bg-green-800 rounded-full overflow-hidden">
               <div className="w-1/3 h-full bg-green-400 rounded-full"></div>
            </div>
         </div>
         <div className="flex space-x-3">
            <button className="flex-1 bg-green-800 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2">
               <Pause className="w-4 h-4" />
            </button>
            <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2">
               <Square className="w-4 h-4" />
            </button>
         </div>
      </div>
   );
}

export default TimeTracker;
