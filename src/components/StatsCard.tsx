import { TrendingUp, ArrowUpRight } from "lucide-react";

function StatsCard() {
   const stats = [
      {
         title: "Total Projects",
         value: "24",
         change: "Increased from last month",
         increase: 6,
         color: "bg-linear-to-b from-green-950 to-green-900",
         increaseColor: "yellow-400",
         icon: TrendingUp,
      },
      {
         title: "Ended Projects",
         value: "10",
         change: "Increased from last month",
         color: "bg-white border border-gray-200",
         increase: 6,
         textColor: "text-gray-900",
         increaseColor: "green-900",
         icon: TrendingUp,
      },
      {
         title: "Running Projects",
         value: "12",
         change: "Decreased from last month",
         color: "bg-white border border-gray-200",
         increase: 6,
         textColor: "text-gray-900",
         increaseColor: "green-900",
         icon: TrendingUp,
      },
      {
         title: "Pending Project",
         value: "2",
         change: "On Previous",
         color: "bg-white border border-gray-200",
         increase: null,
         textColor: "text-gray-900",
         increaseColor: "green-900",
         icon: TrendingUp,
      },
   ];

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
         {stats.map((stat, index) => (
            <div
               key={index}
               className={`${stat.color} rounded-lg p-6 ${
                  index === 0 ? "text-white" : "text-gray-900"
               }`}
            >
               <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium opacity-90">{stat.title}</h3>
                  <div className="bg-white border p-1.5 rounded-full">
                     <ArrowUpRight className="w-5 h-5 rounded-full stroke-black" />
                  </div>
               </div>
               <div className="space-y-2">
                  <p className="text-5xl font-bold">{stat.value}</p>

                  <div
                     className={`flex items-center space-x-1 text-xs opacity-70 text-${stat.increaseColor}`}
                  >
                     {stat.increase && (
                        <span
                           className={`flex items-center border p-0.5 rounded-md border-${stat.increaseColor}`}
                        >
                           <span>{stat.increase}</span>{" "}
                           <span className="font-bold">&#8743; </span>
                        </span>
                     )}
                     <span>{stat.change}</span>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}

export default StatsCard;
