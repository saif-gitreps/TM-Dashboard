import { Calendar, Play } from "lucide-react";

function Reminders() {
   return (
      <div className="bg-white rounded-lg p-6 border border-gray-200 h-full">
         <h3 className="text-lg font-semibold text-gray-900 mb-6">Reminders</h3>
         <div className="space-y-4">
            <div className="flex items-start space-x-3">
               <Calendar className="w-5 h-5 text-green-600 mt-1" />
               <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Meeting with Arc Company</h4>
                  <p className="text-sm text-gray-500">Time: 10:00 pm - 04:00 pm</p>
               </div>
            </div>
            <button className="w-full bg-linear-to-b from-green-950 to-green-900 hover:from-green-900 hover:to-green-700 text-white px-5 py-2 rounded-3xl font-medium flex justify-center items-center space-x-2 transition-all duration-300">
               <Play className="w-4 h-4" />
               <span>Start Meeting</span>
            </button>
         </div>
      </div>
   );
}

export default Reminders;
