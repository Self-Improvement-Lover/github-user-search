// vite.config.js or vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react", "react-dom"], // Add your project's dependencies here
    exclude: ["node_modules"], // Exclude unnecessary modules
  },
});
