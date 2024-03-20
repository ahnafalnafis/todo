import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
    reporters: "verbose",
  },
});
