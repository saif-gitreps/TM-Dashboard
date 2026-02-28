import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
   plugins: [react(), tailwindcss()],
   server: {
      proxy: {
         "/api": {
            target: "https://task-api-eight-flax.vercel.app",
            changeOrigin: true,
            rewrite: (path) => path,
         },
      },
   },
});
