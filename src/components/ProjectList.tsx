import { Plus, Code, Palette, Zap, Globe } from "lucide-react";

function ProjectList() {
   const projects = [
      {
         icon: Code,
         title: "Develop API Endpoints",
         date: "Due date: Nov 26, 2024",
         color: "text-blue-600",
      },
      {
         icon: Palette,
         title: "Onboarding Flow",
         date: "Due date: Nov 28, 2024",
         color: "text-green-600",
      },
      {
         icon: Globe,
         title: "Build Dashboard",
         date: "Due date: Nov 30, 2024",
         color: "text-purple-600",
      },
      {
         icon: Zap,
         title: "Optimize Page Load",
         date: "Due date: Dec 2, 2024",
         color: "text-yellow-600",
      },
      {
         icon: Code,
         title: "Cross-Browser Testing",
         date: "Due date: Dec 4, 2024",
         color: "text-red-600",
      },
   ];

   return (
      <div className="bg-white rounded-lg p-6 border border-gray-200">
         <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Project</h3>
            <button className="flex items-center border rounded-3xl border-green-900 text-green-900 px-4 py-2 font-medium hover:bg-gray-50">
               <Plus className="w-4 h-4" />
               <span>New</span>
            </button>
         </div>
         <div className="space-y-4">
            {projects.map((project, index) => (
               <div key={index} className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg bg-gray-50 ${project.color}`}>
                     <project.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                     <h4 className="text-sm font-medium text-gray-900 truncate">
                        {project.title}
                     </h4>
                     <p className="text-xs text-gray-500">{project.date}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default ProjectList;
