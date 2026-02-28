import StatsCard from "../components/StatsCard";
import ProjectAnalytics from "../components/ProjectAnalytics";
import Reminders from "../components/Reminders";
import TeamCollaboration from "../components/TeamCollaboration";
import ProjectProgress from "../components/ProjectProgress";
import ProjectList from "../components/ProjectList";
import TimeTracker from "../components/TimeTracker";

function DashboardPage() {
   return (
      <div className="space-y-3 bg-gray-50 rounded-2xl p-3">
         <div className="flex items-center justify-between mb-3">
            <div className="text-wrap">
               <h1 className="text-2xl font-medium text-gray-900">Dashboard</h1>
               <p className="text-gray-600">
                  Plan, prioritize, and accomplish your tasks with ease.
               </p>
            </div>
            <div className="flex space-x-3">
               <button className="bg-linear-to-b from-green-950 to-green-900 hover:from-green-900 hover:to-green-700 text-white px-4 rounded-3xl font-medium flex items-center space-x-1 sm:space-x-2 transition-all duration-300">
                  <span>+</span>
                  <span>Add Project</span>
               </button>
               <button className="border rounded-3xl border-green-900 text-green-900 px-4 py-2 font-medium hover:bg-gray-50">
                  Import Data
               </button>
            </div>
         </div>

         <StatsCard />

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="lg:[grid-column:1] lg:[grid-row:1]">
               <ProjectAnalytics />
            </div>
            <div className="lg:[grid-column:1] lg:[grid-row:2]">
               <TeamCollaboration />
            </div>

            <div className="lg:[grid-column:2] lg:[grid-row:1]">
               <Reminders />
            </div>
            <div className="lg:[grid-column:2] lg:[grid-row:2]">
               <ProjectProgress />
            </div>

            <div className="lg:[grid-column:3] lg:[grid-row:1/3] flex flex-col gap-4">
               <ProjectList />
               <TimeTracker />
            </div>
         </div>
      </div>
   );
}

export default DashboardPage;
