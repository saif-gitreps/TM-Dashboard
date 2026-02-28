import { Video } from "lucide-react";

function Reminders() {
   return (
      <div className="bg-white rounded-lg p-6 border border-gray-200 h-full">
         <h3 className="text-lg font-semibold text-gray-900 mb-6">Reminders</h3>
         <div className="space-y-4 flex flex-col justify-between">
            <div className="flex items-start space-x-3">
               <div className="flex-1 text-green-900">
                  <h4 className="text-2xl font-medium">Meeting with Arc Company</h4>
                  <p className="text-sm text-gray-500">Time: 10:00 pm - 04:00 pm</p>
               </div>
            </div>
            <button className="w-full bg-linear-to-b from-green-950 to-green-900 hover:from-green-900 hover:to-green-700 text-white px-5 py-2 rounded-3xl font-medium flex justify-center items-center space-x-2 transition-all duration-300">
               <Video className="w-6 h-6 fill-white" />

               <span>Start Meeting</span>
            </button>
         </div>
      </div>
   );
}

export default Reminders;
