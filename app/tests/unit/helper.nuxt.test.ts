import { describe, expect, it } from "vitest";

describe("helper", (): void => {
  it("appEnv", (): void => {
    expect(appEnv()).toStrictEqual("test");
  });

  it("appEnvView", (): void => {
    expect(appEnvView()).toStrictEqual("テスト");
  });

  it("formatDate", (): void => {
    expect(formatDate("2023-01-01")).toStrictEqual("2023年01月01日");
    expect(formatDate("2023-03")).toStrictEqual("2023年03月");
    expect(() => formatDate("2023")).toThrowError("不正な日付です");
  });

  it("getDateLists", (): void => {
    expect(getDateLists("2023-08", "2024-02")).toStrictEqual([
      "2023-08",
      "2023-09",
      "2023-10",
      "2023-11",
      "2023-12",
      "2024-01",
      "2024-02",
    ]);
    expect(getDateLists("2023-01-25", "2023-02-03")).toStrictEqual([
      "2023-01-25",
      "2023-01-26",
      "2023-01-27",
      "2023-01-28",
      "2023-01-29",
      "2023-01-30",
      "2023-01-31",
      "2023-02-01",
      "2023-02-02",
      "2023-02-03",
    ]);
    expect(getDateLists("2023-02-25", "2023-03-03")).toStrictEqual([
      "2023-02-25",
      "2023-02-26",
      "2023-02-27",
      "2023-02-28",
      "2023-03-01",
      "2023-03-02",
      "2023-03-03",
    ]);

    expect(() => getDateLists("2023-02", "2023-03-03")).toThrowError(
      "不正な日付です",
    );
  });

  it("transformDates", (): void => {
    expect(transformDates(getDateLists("2023-08", "2024-02"))).toStrictEqual({
      "2023-08": "2023年08月",
      "2023-09": "2023年09月",
      "2023-10": "2023年10月",
      "2023-11": "2023年11月",
      "2023-12": "2023年12月",
      "2024-01": "2024年01月",
      "2024-02": "2024年02月",
    });
    expect(
      transformDates(getDateLists("2023-01-25", "2023-02-03")),
    ).toStrictEqual({
      "2023-01-25": "2023年01月25日",
      "2023-01-26": "2023年01月26日",
      "2023-01-27": "2023年01月27日",
      "2023-01-28": "2023年01月28日",
      "2023-01-29": "2023年01月29日",
      "2023-01-30": "2023年01月30日",
      "2023-01-31": "2023年01月31日",
      "2023-02-01": "2023年02月01日",
      "2023-02-02": "2023年02月02日",
      "2023-02-03": "2023年02月03日",
    });
    expect(
      transformDates(getDateLists("2023-02-25", "2023-03-03")),
    ).toStrictEqual({
      "2023-02-25": "2023年02月25日",
      "2023-02-26": "2023年02月26日",
      "2023-02-27": "2023年02月27日",
      "2023-02-28": "2023年02月28日",
      "2023-03-01": "2023年03月01日",
      "2023-03-02": "2023年03月02日",
      "2023-03-03": "2023年03月03日",
    });

    expect(() =>
      transformDates(getDateLists("2023-02-25", "2023-03")),
    ).toThrowError("不正な日付です");
  });

  it("range", (): void => {
    expect(range(0, 10)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("range_step100", (): void => {
    expect(range(0, 3000, 100)).toStrictEqual([
      0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
      1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500,
      2600, 2700, 2800, 2900, 3000,
    ]);
  });
});

describe("isRealNumber", () => {
  it("finite な number では true を返す", () => {
    expect(isRealNumber(0)).toStrictEqual(true);
    expect(isRealNumber(10)).toStrictEqual(true);
    expect(isRealNumber(10.0)).toStrictEqual(true);
    expect(isRealNumber(3.14)).toStrictEqual(true);
    expect(isRealNumber(-3.14)).toStrictEqual(true);
  });

  it("NaN のときは false を返す", () => {
    expect(isRealNumber(Number.NaN)).toStrictEqual(false);
  });

  it("Infinity / -Infinity のときは false を返す", () => {
    expect(isRealNumber(Number.POSITIVE_INFINITY)).toStrictEqual(false);
    expect(isRealNumber(Number.NEGATIVE_INFINITY)).toStrictEqual(false);
  });

  it("number 型以外の値では false を返す", () => {
    expect(isRealNumber("123")).toStrictEqual(false);
    expect(isRealNumber(null)).toStrictEqual(false);
    expect(isRealNumber(undefined)).toStrictEqual(false);
    expect(isRealNumber({})).toStrictEqual(false);
    expect(isRealNumber([])).toStrictEqual(false);
    expect(isRealNumber(true)).toStrictEqual(false);
    expect(isRealNumber(Symbol("1"))).toStrictEqual(false);
  });
});

/*
describe("エイリアンテスト", (): void => {
  it("alien", (): void => {
    expect(0.1 + 0.2).toStrictEqual(0.30000000000000004);
    expect(0.2 + 0.1).toStrictEqual(0.30000000000000004);
    expect(0.2 * 0.1).toStrictEqual(0.020000000000000004);
    expect(0.3 * 0.3).toStrictEqual(0.09);
    expect(0.1 * 0.2 * 0.3).toStrictEqual(0.006000000000000001);
    expect(0.1 * 0.3 * 0.2).toStrictEqual(0.006);
    expect(0.3 / 0.1).toStrictEqual(2.9999999999999996);
    expect(0.2 / 0.02).toStrictEqual(10);
    expect("5" + 6).toStrictEqual("56");
    expect(5 + "6").toStrictEqual("56");
    expect(5 - "6").toStrictEqual(-1);

    // マージ
    // NG
    expect([] + []).toStrictEqual("");
    expect([] + {}).toStrictEqual("[object Object]");
    expect({} + []).toStrictEqual("[object Object]");
    expect({} + {}).toStrictEqual("[object Object][object Object]");
    // OK
    expect({ ...{}, ...{} }).toStrictEqual({});

    // 深いネストのマージはできない
    expect({ ...{ a: { b: 1 } }, ...{ a: { c: 2 } } }).toStrictEqual({
      a: { c: 2 },
    });

    // nullとundefinedの比較
    expect(null == undefined).toBeTruthy(); // 緩い等価
    expect(null === undefined).toBeFalsy(); // 厳密な等価

    expect(Number.NaN === Number.NaN).toBeFalsy();
    expect(isNaN(Number.NaN)).toBeTruthy();

    expect(JSON.stringify({ test: null })).toStrictEqual('{"test":null}');
    expect(JSON.stringify({ test: undefined })).toStrictEqual("{}");
  });
});
*/
