import type { ConfigOptions } from "@nuxt/test-utils/playwright";
import { defineConfig, devices } from "@playwright/test";

export default defineConfig<ConfigOptions>({
  testDir: "./tests/e2e",
  testMatch: "*.nuxt.spec.ts",
  use: {
    deviceScaleFactor: 1,
    bypassCSP: true,
  },
});
