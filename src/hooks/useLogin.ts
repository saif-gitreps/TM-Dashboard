import { useMutation } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";
import type { LoginFormData, User } from "../utils/types";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function useLogin() {
   const navigate = useNavigate();
   const { login } = useAuth();

   return useMutation({
      mutationFn: async (data: LoginFormData) => {
         const response = await apiClient.post<User>("/api/login", data);
         return response.data;
      },
      onError: (error) => {
         console.log(error);
      },
      onSuccess: (user) => {
         login(user);
         navigate("/dashboard");
      },
   });
}
