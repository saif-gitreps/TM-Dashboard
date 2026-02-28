import { Pause, Square, Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function TimeTracker() {
   const [seconds, setSeconds] = useState(0);
   const [isRunning, setIsRunning] = useState(false);
   const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
   const maxSeconds = 3600;

   useEffect(() => {
      if (isRunning) {
         intervalRef.current = setInterval(() => {
            setSeconds((s) => s + 1);
         }, 1000);
      } else {
         if (intervalRef.current) clearInterval(intervalRef.current);
      }
      return () => {
         if (intervalRef.current) clearInterval(intervalRef.current);
      };
   }, [isRunning]);

   const handleStop = () => {
      setIsRunning(false);
      setSeconds(0);
   };

   const format = (s: number) => {
      const h = Math.floor(s / 3600)
         .toString()
         .padStart(2, "0");
      const m = Math.floor((s % 3600) / 60)
         .toString()
         .padStart(2, "0");
      const sec = (s % 60).toString().padStart(2, "0");
      return `${h}:${m}:${sec}`;
   };

   const progress = Math.min((seconds / maxSeconds) * 100, 100);

   return (
      <div className="bg-linear-to-b from-green-950 to-green-900 rounded-lg p-6 text-white">
         <h3 className="text-lg font-semibold mb-6">Time Tracker</h3>

         <div className="text-center mb-6">
            <div className="text-4xl font-bold mb-2 tabular-nums">{format(seconds)}</div>
            <div className="w-full h-2 bg-green-800 rounded-full overflow-hidden">
               <div
                  className="h-full bg-green-400 rounded-full transition-all duration-1000"
                  style={{ width: `${progress}%` }}
               />
            </div>
         </div>

         <div className="flex space-x-3 justify-center">
            <button
               onClick={() => setIsRunning((r) => !r)}
               className="bg-white hover:bg-green-100 p-3 rounded-full flex items-center justify-center w-10 h-10"
            >
               {isRunning ? (
                  <Pause className="w-4 h-4 stroke-green-800 fill-green-800" />
               ) : (
                  <Play className="w-4 h-4 stroke-green-800 fill-green-800" />
               )}
            </button>
            <button
               onClick={handleStop}
               className="bg-red-600 hover:bg-red-700 p-3 rounded-full flex items-center justify-center w-10 h-10"
            >
               <Square className="w-4 h-4 fill-white stroke-white" />
            </button>
         </div>
      </div>
   );
}

export default TimeTracker;
