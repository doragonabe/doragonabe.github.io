import { mountSuspended } from "@nuxt/test-utils/runtime";
import { expect, it } from "vitest";
import { ColorMode, H2, H3, HamburgerMenu } from "#components";

it("HTML スナップショットとマッチする", async () => {
  const h2_wrapper = await mountSuspended(H2, {
    slots: { default: () => "スナップショット" },
  });
  expect(h2_wrapper.html()).toMatchInlineSnapshot(`
    "<h2 class="rounded-xl bg-blue-500 p-7 text-2xl text-white before:mr-2.5 before:inline-flex before:h-6 before:w-6 before:rounded-xl before:border-4 before:border-white">スナップショット</h2>"
  `);

  const h3_wrapper = await mountSuspended(H3, {
    slots: { default: () => "スナップショット" },
  });
  expect(h3_wrapper.html()).toMatchInlineSnapshot(`
    "<h3 class="rounded-lg border border-solid border-stone-400/55 bg-white px-5 py-1 text-black/80 first-letter:border-l-4 first-letter:[border-left-style:solid] first-letter:border-l-blue-500 first-letter:pl-3">スナップショット</h3>"
  `);

  const color_mode_wrapper = await mountSuspended(ColorMode);
  expect(color_mode_wrapper.html()).toMatchInlineSnapshot(`
    "<button type="button" aria-label="Theme" class="rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors text-sm gap-1.5 text-primary hover:bg-primary/10 active:bg-primary/10 focus:outline-none focus-visible:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent p-1.5"><span class="iconify i-heroicons:sun-20-solid shrink-0 size-5" aria-hidden="true"></span>
  <!--v-if-->
  <!--v-if-->
</button>"
  `);

  const hamburger_menu_wrapper_default = await mountSuspended(HamburgerMenu);
  expect(hamburger_menu_wrapper_default.html()).toMatchInlineSnapshot(`
    "<button class="drawer_open flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-500" aria-expanded="false" aria-label="メニューを開く" aria-controls="h_nav" type="button">
  <div class="absolute block h-1 w-7 rounded-sm bg-white duration-500 before:absolute before:bottom-2.5 before:block before:h-1 before:w-7 before:rounded-sm before:bg-white before:duration-500 after:absolute after:top-2.5 after:block after:h-1 after:w-7 after:rounded-sm after:bg-white after:duration-500"></div>
</button>"
  `);

  const hamburger_menu_wrapper_false = await mountSuspended(HamburgerMenu, {
    props: { modelValue: false },
  });
  expect(hamburger_menu_wrapper_false.html()).toMatchInlineSnapshot(`
    "<button class="drawer_open flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-500" aria-expanded="false" aria-label="メニューを開く" aria-controls="h_nav" type="button">
  <div class="absolute block h-1 w-7 rounded-sm bg-white duration-500 before:absolute before:bottom-2.5 before:block before:h-1 before:w-7 before:rounded-sm before:bg-white before:duration-500 after:absolute after:top-2.5 after:block after:h-1 after:w-7 after:rounded-sm after:bg-white after:duration-500"></div>
</button>"
  `);

  const hamburger_menu_wrapper_true = await mountSuspended(HamburgerMenu, {
    props: { modelValue: true },
  });
  expect(hamburger_menu_wrapper_true.html()).toMatchInlineSnapshot(`
    "<button class="drawer_open flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-500" aria-expanded="true" aria-label="メニューを閉じる" aria-controls="h_nav" type="button">
  <div class="absolute block h-1 w-7 rounded-sm bg-white duration-500 before:absolute before:bottom-2.5 before:block before:h-1 before:w-7 before:rounded-sm before:bg-white before:duration-500 after:absolute after:top-2.5 after:block after:h-1 after:w-7 after:rounded-sm after:bg-white after:duration-500 !bg-transparent before:!bottom-0 after:!top-0 before:!rotate-45 after:!-rotate-45"></div>
</button>"
  `);
});
