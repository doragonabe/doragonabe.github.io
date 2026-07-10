import type { ConfigOptions } from "@nuxt/test-utils/playwright";
import { defineConfig, devices } from "@playwright/test";

export default defineConfig<ConfigOptions>({
  testMatch: "*.nuxt.spec.ts",
  fullyParallel: true,
  //reporter: "html",

  use: {
    bypassCSP: true,
    baseURL: "http://localhost:3001",
    headless: true,
    video: "on",
    trace: "on-first-retry",
    /*
    launchOptions: {
      slowMo: 400,
    },
    */
  },

  projects: [
    {
      name: "chromium-DesktopChrome",
      use: {
        ...devices["Desktop Chrome"],
        browserName: "chromium",
      },
    },
    {
      name: "firefox-DesktopFirefox",
      use: {
        ...devices["Desktop Firefox"],
        browserName: "firefox",
      },
    },
    {
      name: "webkit-DesktopSafari",
      use: {
        ...devices["Desktop Safari"],
        browserName: "webkit",
      },
    },
    {
      name: "webkit-iPhone15",
      use: {
        ...devices["iPhone 15"],
        browserName: "webkit",
      },
    },
    {
      name: "chromium-Pixel7",
      use: {
        ...devices["Pixel 7"],
        browserName: "chromium",
      },
    },
  ],

  webServer: {
    command: "pnpm run dev --port 3001",
    //port: 3001,
    url: "http://localhost:3001",
    reuseExistingServer: !process.env.CI,
    //stdout: "ignore",
    //stderr: "pipe",
    //timeout: 10000,
  },

  expect: {
    toHaveScreenshot: {
      //threshold: 0.005, // 0.5% までの差異を許容
      //maxDiffPixelRatio: 0.002, // 全ピクセルの0.2%まで
      threshold: 0.005,
      maxDiffPixelRatio: 0.002,
    },
  },
});
