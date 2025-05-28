import { globalName } from "#color-mode-options";

// Nuxt のプラグインが走る前に globalName を定義しておく
(globalThis as any)[globalName] = {
  preference: "light", // 必要なら初期値を
  value: "light", // 同上
  getColorScheme: () => "light",
  addColorScheme: (_: string) => {}, // noop
  removeColorScheme: (_: string) => {}, // noop
};
