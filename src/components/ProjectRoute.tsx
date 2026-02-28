import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { ReactNode } from "react";

export function ProtectRoute({
   children,
   auth = true,
}: {
   children: ReactNode;
   auth?: boolean;
}) {
   const { user } = useAuth();

   if (auth && !user) {
      return <Navigate to="/" replace />;
   }
   if (!auth && user) {
      return <Navigate to="/dashboard" replace />;
   }

   return children;
}
