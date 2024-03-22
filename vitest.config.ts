import { resolve } from "node:path";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
    reporters: "verbose",
    coverage: {
      provider: "v8",
    },
  },
});
