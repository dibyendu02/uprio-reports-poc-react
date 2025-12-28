import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path"; // Import path to resolve directory
// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Automatically bind to your local IP address
    port: 5173, // Optionally set the port
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // SVGR options here
        icon: true,
        // See https://react-svgr.com/docs/options/
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Set up the @ alias for src
    },
  },
});
