import { useState } from "react";
import {
   BarChart3,
   Calendar,
   HelpCircle,
   Blocks,
   LogOut,
   Settings,
   Users,
   CheckSquare,
   Download,
   ChevronLeft,
   ChevronRight,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

function SideBar() {
   const [isOpen, setIsOpen] = useState(false);
   const { logout } = useAuth();

   const menuItems = [
      { icon: Blocks, label: "Dashboard", active: true },
      { icon: CheckSquare, label: "Tasks", badge: "20+" },
      { icon: Calendar, label: "Calendar" },
      { icon: BarChart3, label: "Analytics" },
      { icon: Users, label: "Team" },
   ];

   const generalItems = [
      { icon: Settings, label: "Settings" },
      { icon: HelpCircle, label: "Help" },
   ];

   return (
      <>
         <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden fixed top-18 left-4 z-50 bg-white border border-gray-200 shadow-md p-2 rounded-full"
         >
            {isOpen ? (
               <ChevronLeft className="w-5 h-5 text-gray-700" />
            ) : (
               <ChevronRight className="w-5 h-5 text-gray-700" />
            )}
         </button>

         {isOpen && (
            <div
               className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
               onClick={() => setIsOpen(false)}
            />
         )}

         <div
            className={`fixed md:static top-0 left-0 h-full z-50
            transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
            transition-transform duration-300 ease-in-out
            w-64 bg-gray-50 border-r border-gray-200 flex flex-col rounded-2xl m-1`}
         >
            <div className="p-6">
               <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                     <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xl font-semibold text-gray-900">Donezo</span>
               </div>
            </div>

            <nav className="flex-1 px-4 overflow-y-auto">
               <div className="mb-8">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                     MENU
                  </p>
                  <ul className="space-y-1">
                     {menuItems.map((item, index) => (
                        <li key={index}>
                           <a
                              href="#"
                              className={`flex items-center justify-between px-3 py-2 text-sm font-medium ${
                                 item.active
                                    ? "border-l-5 px-1 border-green-700"
                                    : "text-gray-400 hover:bg-gray-50"
                              }`}
                           >
                              <div className="flex items-center space-x-3">
                                 <item.icon className="w-5 h-5" />
                                 <span>{item.label}</span>
                              </div>
                              {item.badge && (
                                 <span className="bg-green-900 text-white text-xs px-2 py-1 rounded-md">
                                    {item.badge}
                                 </span>
                              )}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="mb-8">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                     GENERAL
                  </p>
                  <ul className="space-y-1">
                     {generalItems.map((item, index) => (
                        <li key={index}>
                           <a
                              href="#"
                              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
                           >
                              <item.icon className="w-5 h-5" />
                              <span>{item.label}</span>
                           </a>
                        </li>
                     ))}
                  </ul>

                  <div className="mt-1">
                     <button
                        className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:cursor-pointer"
                        onClick={() => logout()}
                     >
                        <LogOut className="w-5 h-5" />
                        <span>Logout</span>
                     </button>
                  </div>
               </div>
            </nav>

            <div className="p-4">
               <div className="bg-linear-to-br from-black via-gray-900 to-green-900 rounded-lg p-4 text-white">
                  <div className="flex flex-col items-start space-x-2 mb-2">
                     <Download className="w-5 h-5" />
                     <span className="text-xl">Download our Mobile App</span>
                  </div>
                  <p className="text-xs text-gray-300 mb-3">
                     Get easy access on mobile app
                  </p>
                  <button className="w-full bg-green-800 hover:bg-green-900 text-white text-sm font-medium py-2 px-4 rounded-3xl">
                     Download
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}

export default SideBar;
