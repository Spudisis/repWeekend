import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@Pages", replacement: path.resolve(__dirname, "src/pages") },
      {
        find: "@Components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@Api", replacement: path.resolve(__dirname, "src/api") },
      { find: "@Assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "@Store", replacement: path.resolve(__dirname, "src/store") },
      { find: "@Shared", replacement: path.resolve(__dirname, "src/shared") },
    ],
  },
});
