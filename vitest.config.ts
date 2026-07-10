import { defineVitestConfig } from "@nuxt/test-utils/config";

const nativeStructuredClone = globalThis.structuredClone;

globalThis.structuredClone = ((value, options) => {
  try {
    return nativeStructuredClone(value, options);
  } catch (error) {
    if (error instanceof DOMException && error.name === "DataCloneError") {
      const json = JSON.stringify(value);
      return json === undefined ? undefined : JSON.parse(json);
    }

    throw error;
  }
}) as typeof structuredClone;

export default defineVitestConfig({
  test: {
    environment: "nuxt",
  },
});
