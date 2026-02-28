import { createContext, useContext, useState, type ReactNode } from "react";
import type { User } from "../utils/types";

type AuthContextType = {
   user: User | null;
   login: (userData: User) => void;
   logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
   const [user, setUser] = useState<User | null>(() => {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
   });

   const login = (userData: User) => {
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
   };

   const logout = () => {
      localStorage.removeItem("user");
      setUser(null);
   };

   return (
      <AuthContext.Provider value={{ user, login, logout }}>
         {children}
      </AuthContext.Provider>
   );
}

export const useAuth = () => {
   const context = useContext(AuthContext);
   if (!context) throw new Error("useAuth must be used within an AuthProvider");
   return context;
};
