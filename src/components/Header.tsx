import { Search, Mail, Bell } from "lucide-react";

function Header() {
   return (
      <header className="bg-gray-50 border-b border-gray-200 px-6 py-3 rounded-2xl">
         <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
               <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
                  <input
                     type="text"
                     placeholder="Search task"
                     className="bg-white pl-10 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-80"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-200 px-2 py-1 rounded font-bold">
                     ⌘ F
                  </span>
               </div>
            </div>

            <div className="flex items-center space-x-3">
               <button className="p-3 text-gray-800 hover:text-gray-600 bg-white rounded-full">
                  <Mail className="w-5 h-5" />
               </button>
               <button className="p-3 text-gray-800 hover:text-gray-600 bg-white rounded-full">
                  <Bell className="w-5 h-5" />
               </button>
               <div className="flex items-center space-x-3">
                  <img
                     src="https://images.pexels.com/photos/3228830/pexels-photo-3228830.jpeg?auto=compress&cs=tinysrgb&h=350"
                     alt="Totok Michael"
                     className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="text-sm hidden lg:block">
                     <p className="font-bold text-gray-900">Totok Michael</p>
                     <p className="text-gray-500">tmichael20@email.com</p>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;
