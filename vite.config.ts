import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        busca_plantix: path.resolve(__dirname, "busca-plantix/index.html"),
      },
    },
  },
});
