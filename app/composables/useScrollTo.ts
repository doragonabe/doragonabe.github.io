/**
 * app/router.options.tsに受け渡す用
 */
const setState = ref("");
export const useScrollTo = (hash?: string) => {
  //export default function (hash?: string) {
  //export default (hash?: string) => {
  if (hash) {
    setState.value = hash;
  }

  return { setState };
};
