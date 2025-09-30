import { expect, test } from "@nuxt/test-utils/playwright";

const title = "doragonabe site";

test.describe
  .parallel("test", () => {
    test("index", async ({ page, goto }) => {
      await goto("/", { waitUntil: "hydration" });
      await expect(page).toHaveURL("/");
      await expect(page).toHaveTitle(`トップ | ${title}`);
      await expect(page).toHaveScreenshot({ fullPage: true });

      await page.locator(".drawer_open").click();
      await expect(page).toHaveScreenshot({ fullPage: true });
    });

    /*
  test("server_rules", async ({ page, goto }) => {
    await goto("/server_rules/", { waitUntil: "hydration" });
    await expect(page).toHaveURL("/server_rules");
    await expect(page).toHaveTitle(`サーバールール | ${title}`);
    await expect(page).toHaveScreenshot({ fullPage: true });

    await page.locator(".drawer_open").click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test("server_introduction", async ({ page, goto }) => {
    await goto("/server_introduction/", { waitUntil: "hydration" });
    await expect(page).toHaveURL("/server_introduction");
    await expect(page).toHaveTitle(`サーバー紹介 | ${title}`);
    await expect(page).toHaveScreenshot({ fullPage: true });

    await page.locator(".drawer_open").click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test("server_specifications", async ({ page, goto }) => {
    await goto("/server_specifications/", { waitUntil: "hydration" });
    await expect(page).toHaveURL("/server_specifications");
    await expect(page).toHaveTitle(`サーバー仕様 | ${title}`);
    await expect(page).toHaveScreenshot({ fullPage: true });

    await page.locator(".drawer_open").click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test("q_and_a", async ({ page, goto }) => {
    await goto("/q_and_a/", { waitUntil: "hydration" });
    await expect(page).toHaveURL("/q_and_a");
    await expect(page).toHaveTitle(`Q & A | ${title}`);
    await expect(page).toHaveScreenshot({ fullPage: true });

    await page.locator(".drawer_open").click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test("unique_function", async ({ page, goto }) => {
    await goto("/unique_function/", { waitUntil: "hydration" });
    await expect(page).toHaveURL("/unique_function");
    await expect(page).toHaveTitle(`独自機能 | ${title}`);
    await expect(page).toHaveScreenshot({ fullPage: true });

    await page.locator(".drawer_open").click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test("original_recipes", async ({ page, goto }) => {
    await goto("/original_recipes/", { waitUntil: "hydration" });
    await expect(page).toHaveURL("/original_recipes");
    await expect(page).toHaveTitle(`独自レシピ | ${title}`);
    await expect(page).toHaveScreenshot({ fullPage: true });

    await page.locator(".drawer_open").click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });
  */
  });
