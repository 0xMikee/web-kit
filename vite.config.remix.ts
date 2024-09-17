// vite.config.remix.ts
import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import { flatRoutes } from "remix-flat-routes";
import { installGlobals } from "@remix-run/node";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
    server: {
        port: 8000,
    },
    plugins: [
        remix({
            ignoredRouteFiles: ["**/*"],
            routes: async (defineRoutes) => {
                return flatRoutes("routes", defineRoutes, {
                    ignoredRouteFiles: [
                        ".*",
                        "**/*.css",
                        "**/*.test.{js,jsx,ts,tsx}",
                        "**/__*.*",
                    ],
                });
            },
        }),
        tsconfigPaths()
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @use "./app/styles/theme/_theme" as *;
        `,
            },
        },
    },
});
