import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    VitePWA({
      mode: "development",
      manifest: {
        name: "App name",
        short_name: "App short name",
        description: "App description",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
      },
    }),
  ],
});
