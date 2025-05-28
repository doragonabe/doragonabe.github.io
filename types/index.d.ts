import "@nuxt/schema";

export type Range<
  N extends number,
  M extends number,
  Result extends number = never,
  C extends never[] = [],
  Flag extends boolean = false,
> = C["length"] extends N
  ? Range<N, M, Result | C["length"], [...C, never], true>
  : Flag extends true
    ? C["length"] extends M
      ? Result | C["length"]
      : Range<N, M, Result | C["length"], [...C, never], Flag>
    : Range<N, M, Result, [...C, never], Flag>;

declare module "nuxt/schema" {
  interface PublicRuntimeConfig {
    appEnv: "local" | "test" | "development" | "staging" | "production";
  }
}
