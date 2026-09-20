if (process.env.VERCEL) {
  process.env.NITRO_PRESET = "vercel";
}

import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [
    tanstackStart({ server: { entry: "server" } }), // MUST come before react()
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: { "@": path.resolve("./src") },
  },
});
