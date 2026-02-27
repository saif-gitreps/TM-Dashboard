import { Plus } from "lucide-react";

function TeamCollaboration() {
   const teamMembers = [
      {
         name: "Alexandra Deff",
         project: "GitHub Project Repository",
         status: "Completed",
         avatar:
            "https://images.pexels.com/photos/9489396/pexels-photo-9489396.jpeg?auto=compress&cs=tinysrgb&h=350",
         statusColor: "text-green-600",
      },
      {
         name: "Edwin Adenike",
         project: "Integrate User Authentication System",
         status: "In Progress",
         avatar:
            "https://images.pexels.com/photos/5453896/pexels-photo-5453896.jpeg?auto=compress&cs=tinysrgb&h=350",
         statusColor: "text-yellow-600",
      },
      {
         name: "Isaac Oluwatemilorun",
         project: "Develop Cross-Platform Filter Functionality",
         status: "Pending",
         avatar:
            "https://images.pexels.com/photos/1367272/pexels-photo-1367272.jpeg?auto=compress&cs=tinysrgb&h=350",
         statusColor: "text-gray-600",
      },
      {
         name: "David Oshodi",
         project: "Responsive Layout for Homepage",
         status: "In Progress",
         avatar:
            "https://images.pexels.com/photos/6196677/pexels-photo-6196677.jpeg?auto=compress&cs=tinysrgb&h=350",
         statusColor: "text-yellow-600",
      },
   ];

   return (
      <div className="bg-white rounded-lg p-6 border border-gray-200">
         <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Team Collaboration</h3>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center space-x-1">
               <Plus className="w-4 h-4" />
               <span>Add Member</span>
            </button>
         </div>
         <div className="space-y-4">
            {teamMembers.map((member, index) => (
               <div key={index} className="flex items-center space-x-4">
                  <img
                     src={member.avatar}
                     alt={member.name}
                     className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                     <h4 className="text-sm font-medium text-gray-900">{member.name}</h4>
                     <p className="text-xs text-gray-500 truncate">
                        Working on {member.project}
                     </p>
                  </div>
                  <span
                     className={`text-xs font-medium px-2 py-1 rounded-full ${
                        member.status === "Completed"
                           ? "bg-green-100 text-green-800"
                           : member.status === "In Progress"
                             ? "bg-yellow-100 text-yellow-800"
                             : "bg-gray-100 text-gray-800"
                     }`}
                  >
                     {member.status}
                  </span>
               </div>
            ))}
         </div>
      </div>
   );
}

export default TeamCollaboration;
