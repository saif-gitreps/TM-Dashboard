import { Link } from "react-router-dom";
import type { LoginFormData } from "../utils/types";
import { useForm } from "react-hook-form";
import useLogin from "../hooks/useLogin";

function LoginPage() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<LoginFormData>();

   const { mutate: login, isPending } = useLogin();

   const onSubmit = (data: LoginFormData) => {
      login(data);
   };

   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         className="flex flex-col items-center justify-between p-6 rounded-2xl bg-gray-50 mx-auto w-xl mt-16 space-y-5"
      >
         <h1 className="text-2xl font-medium flex space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
               <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>

            <span>Welcome Back!</span>
         </h1>
         <p className="text-green-900 font-medium">
            New to Denzino?{" "}
            <Link className="underline" to={"/"}>
               Register
            </Link>
         </p>
         <div className="flex flex-col space-y-2 font-medium">
            <label htmlFor="">Email:</label>
            <input
               className="bg-white pl-10 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-80"
               placeholder="abc@gmail.com"
               {...register("email", {
                  required: "email is required",
               })}
            />

            {errors.email && <span className="text-red-600">{errors.email.message}</span>}
         </div>
         <div className="flex flex-col space-y-2 font-medium">
            <label htmlFor="">Password:</label>
            <input
               className="bg-white pl-10 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-80"
               type="password"
               placeholder="********"
               {...register("password", {
                  required: "Password is required",

                  minLength: {
                     value: 6,
                     message: "Password should be at least 6 characters",
                  },
               })}
            />

            {errors.password && (
               <span className="text-red-600">{errors.password.message}</span>
            )}
         </div>

         <button
            className="bg-linear-to-b from-green-950 to-green-900 hover:from-green-900 hover:to-green-700 text-white py-2 rounded-3xl font-medium space-x-2 transition-all duration-300 hover:cursor-pointer px-7 w-40 text-center"
            disabled={isPending}
         >
            {isPending ? "Please wait" : "Submit"}
         </button>

         <div>
            <Link className="underline" to={"/"}>
               Forgot password?
            </Link>
         </div>
      </form>
   );
}

export default LoginPage;
