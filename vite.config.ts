import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vite";

const root = dirname(fileURLToPath(import.meta.url));

/**
 * Serve extension-less routes (e.g. `/case-aiops`) from their `.html` file in
 * dev mode, mirroring Cloudflare's `html_handling: auto-trailing-slash`.
 */
function cleanUrls(): Plugin {
  return {
    name: "clean-urls",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url ?? "/";
        if (url === "/case-aiops" || url.startsWith("/case-aiops?")) {
          req.url = url.replace("/case-aiops", "/case-aiops.html");
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), cleanUrls()],
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        case: resolve(root, "case-aiops.html"),
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
  },
});
