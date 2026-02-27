import type { ReactNode } from "react";
import SideBar from "./SideBar";
import Header from "./Header";

function Layout({ children }: { children: ReactNode }) {
   return (
      <div className="flex h-screen p-2">
         <SideBar />

         <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-y-auto p-1">{children}</main>
         </div>
      </div>
   );
}

export default Layout;
