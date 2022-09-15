import react from "@vitejs/plugin-react";
import OpenProps from "open-props";
import postcssJitProps from "postcss-jit-props";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [postcssJitProps(OpenProps)],
    },
  },
});
