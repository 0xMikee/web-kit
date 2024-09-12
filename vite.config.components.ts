// vite.config.components.ts
import { extname, relative, resolve } from "node:path";
import { defineConfig } from "vite";
import { glob } from "glob";
import dts from "vite-plugin-dts";

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @use "./app/styles/theme/_theme" as *;
        `,
            },
        },
    },
    build: {
        cssCodeSplit: false, // Disable CSS splitting
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, "lib/main.ts"), // Entry point for the WebKit library
            formats: ["es"],
        },
        rollupOptions: {
            external: ["react", "react/jsx-runtime"],
            input: glob
                .sync("lib/**/*.{ts,tsx}", { ignore: ["lib/**/*.stories.{ts,tsx}", "lib/**/*.css"] })
                .reduce((entries, file) => {
                    const entryName = relative("lib", file.slice(0, file.length - extname(file).length));
                    entries[entryName] = resolve(__dirname, file);
                    return entries;
                }, {}),
            output: {
                assetFileNames: "assets/[name][extname]",
                entryFileNames: "[name].js",
            },
        },
    },
    plugins: [
        dts({
            include: ["lib"],
        }),
    ],
});
