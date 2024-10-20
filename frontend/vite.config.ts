/// <reference types="vitest" />
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
import alias from "@rollup/plugin-alias";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "istanbul", // istanbul or 'c8'
    },
    setupFiles: ["src/setupTest.ts"],
  },
  plugins: [
    svgr(),
    alias({
      entries: [
        { find: "@pages", replacement: "/src/pages" },
        { find: "@api", replacement: "/src/api" },
        { find: "@components", replacement: "/src/components" },
        { find: "@models", replacement: "/src/models" },
        { find: "@hooks", replacement: "/src/hooks" },
        { find: "@assets", replacement: "/src/assets" },
        { find: "@mocks", replacement: "/src/mocks" },
        { find: "@redux", replacement: "/src/redux" },
        { find: "@utils", replacement: "/src/utils" },
        { find: "@constants", replacement: "/src/constants" },
        { find: "@db", replacement: "/src/db" },
        { find: "@styles", replacement: "/src/styles" },
      ],
    }),
    VitePWA({
      registerType: "prompt",
      injectRegister: "auto",

      devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: false,
        type: "module",
      },

      strategies: "injectManifest", // If you are using a custom service-worker
      srcDir: "src/service-worker",
      filename: "index.ts",

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "my-pwa-app",
        short_name: "pwa",
        description: "boilerplate for pwa",
        theme_color: "#00FF00",
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        swDest: "build/sw.js",
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
    }),
  ],
});
