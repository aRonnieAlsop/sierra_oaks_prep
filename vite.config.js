import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Sierra-Oaks-Prep/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});