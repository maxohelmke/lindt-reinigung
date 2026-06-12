// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // NITRO_PRESET activates nitro with the given preset (e.g. vercel-edge for Vercel deploys).
  // Undefined outside of Lovable sandbox = nitro skipped (default behaviour).
  nitro: process.env.NITRO_PRESET ? { preset: process.env.NITRO_PRESET as string } : undefined,
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("embla-carousel")) return "carousel";
            if (id.includes("lucide-react") || id.includes("@phosphor-icons/react")) return "icons";
            if (id.includes("motion")) return "motion";
            if (id.includes("@tanstack/react-router") || id.includes("@tanstack/router-core")) {
              return "router";
            }
          },
        },
      },
    },
  },
});
