import postcss from "./postcss.config.js";
import { svelte } from "@sveltejs/vite-plugin-svelte";
// import { nodePolyfills } from "vite-plugin-node-polyfills";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    css: {
        postcss,
    },
    base: "./",
});
