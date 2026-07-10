import { describe, expect, it } from "vitest";
import {
  DEFAULT_BACKGROUND_TYPE,
  DEFAULT_LOGO_TYPE,
  STRENGTHS_FINDER_TRAITS,
  createInitialVirtualBackgroundUserInfo,
  getVirtualBackgroundImagePath,
} from "~/utils/virtualBackground";

describe("virtualBackground", () => {
  it("デフォルトの背景画像パスを生成できる", () => {
    expect(
      getVirtualBackgroundImagePath(DEFAULT_BACKGROUND_TYPE, DEFAULT_LOGO_TYPE),
    ).toStrictEqual("/background/tate-test1.png");
  });

  it("ストレングスファインダーのマスタ名が重複していない", () => {
    const names = STRENGTHS_FINDER_TRAITS.map((trait) => trait.name);

    expect(names).toHaveLength(34);
    expect(new Set(names).size).toStrictEqual(names.length);
  });

  it("ユーザー情報の初期値は独立したストレングス配列を持つ", () => {
    const first = createInitialVirtualBackgroundUserInfo();
    const second = createInitialVirtualBackgroundUserInfo();

    first.sf[0] = "分析思考";

    expect(first.sf).toHaveLength(10);
    expect(second.sf).toHaveLength(10);
    expect(second.sf[0]).toStrictEqual("");
  });
});
