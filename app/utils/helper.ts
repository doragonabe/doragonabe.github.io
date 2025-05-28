const envMap = {
  local: "ローカル",
  test: "テスト",
  development: "開発",
  staging: "検証",
  production: "本番",
} as const;

type TypeEnv = keyof typeof envMap;
type DisplayEnv = (typeof envMap)[TypeEnv];

export const appEnv = (): TypeEnv => {
  return useRuntimeConfig().public.appEnv;
};

export const appEnvView = (): DisplayEnv => {
  return envMap[useRuntimeConfig().public.appEnv];
};

/**
 * 今日の日付をYYYY-MM-DD形式で返す
 */
type DateString = `${number}-${number}-${number}` | `${number}-${number}`;

interface DateOptions {
  yearFlag?: boolean;
  monthFlag?: boolean;
  dayFlag?: boolean;
  monthsToAdd?: number;
}

export const getCurrentDate = ({
  yearFlag = true,
  monthFlag = true,
  dayFlag = true,
  monthsToAdd = 0,
}: DateOptions = {}): DateString => {
  const parts: string[] = [];

  const date: Date = new Date();
  if (monthsToAdd) {
    date.setMonth(date.getMonth() + monthsToAdd); // 指定された月数を追加
  }

  if (yearFlag) {
    const year: string = date.getFullYear().toString();
    parts.push(year);
  }
  if (monthFlag) {
    // 月は0から始まるため+1し、2桁になるようにパディング
    const month: string = (date.getMonth() + 1).toString().padStart(2, "0");
    parts.push(month);
  }
  // 日を2桁になるようにパディング
  if (dayFlag) {
    const day: string = date.getDate().toString().padStart(2, "0");
    parts.push(day);
  }

  return parts.join("-") as DateString;
};

/**
 * YYYY-MM-DD形式の日付を、YYYY年MM月DD日形式に変換
 * YYYY-MM形式の場合は、YYYY年MM月に変換
 */
export const formatDate = (date: string): string => {
  // 入力された日付を'-'で分割
  const dateParts: string[] = date.split("-");

  // 年と月を取得
  const year: string = dateParts[0] ?? "";
  const month: string = dateParts[1] ?? "";

  // YYYY-MM-DD形式の場合
  if (dateParts.length === 3) {
    const day: string = dateParts[2] ?? "";
    return `${year}年${month}月${day}日`;
  }

  // YYYY-MM形式の場合
  if (dateParts.length === 2) {
    return `${year}年${month}月`;
  }

  // 不正な日付形式の場合
  throw new Error("不正な日付です");
};

/**
 * YYYY-MM-DD形式の日付の範囲を、配列で取得
 */
export const getDateLists = (
  startDate: DateString,
  endDate: DateString,
): string[] => {
  const startParts: string[] = startDate.split("-").map(String);
  const endParts: string[] = endDate.split("-").map(String);

  if (
    !(
      (startParts.length === 2 && endParts.length === 2) ||
      (startParts.length === 3 && endParts.length === 3)
    )
  ) {
    throw new Error("不正な日付です");
  }

  const getStartY: number = Number.parseInt(startParts[0] ?? "", 10);
  const getStartM: number = Number.parseInt(startParts[1] ?? "", 10) - 1;
  const getStartD: number =
    startParts.length === 3 ? Number.parseInt(startParts[2] ?? "", 10) : 1;
  const start: Date = new Date(getStartY, getStartM, getStartD);

  const getEndY: number = Number.parseInt(endParts[0] ?? "", 10);
  const getEndM: number = Number.parseInt(endParts[1] ?? "", 10) - 1;
  const getEndD: number =
    endParts.length === 3
      ? Number.parseInt(endParts[2] ?? "", 10)
      : new Date(getEndY, getEndM + 1, 0).getDate();
  const end: Date = new Date(getEndY, getEndM, getEndD);

  const options: string[] = [];

  if (startParts.length === 2 && endParts.length === 2) {
    while (start <= end) {
      const setY: string = start.getFullYear().toString();
      const setM: string = (start.getMonth() + 1).toString().padStart(2, "0");
      options.push(`${setY}-${setM}`);
      start.setMonth(start.getMonth() + 1);
    }
  } else {
    while (start <= end) {
      const setY: string = start.getFullYear().toString();
      const setM: string = (start.getMonth() + 1).toString().padStart(2, "0");
      const setD: string = start.getDate().toString().padStart(2, "0");
      const value: string = `${setY}-${setM}-${setD}`;
      options.push(value);
      start.setDate(start.getDate() + 1);
    }
  }

  return options;
};

/**
 * YYYY-MM-DD形式の日付の配列を、YYYY年MM月DD日形式のオブジェクト配列に変換
 * YYYY-MM形式の場合は、YYYY年MM月に変換
 */
export const transformDates = (dates: string[]): Record<string, string> => {
  return dates.reduce(
    (acc: Record<string, string>, date: string) => {
      acc[date] = formatDate(date);

      return acc;
    },
    {} as Record<string, string>,
  );
};

export const byteLengthOf = (s: string): number => {
  return new Blob([s]).size;
};

export const range = (start: number, end: number, step = 1): number[] => {
  const output = [];
  for (let i = start; i <= end; i += step) {
    output.push(i);
  }

  return output;
};

export const isRealNumber = (value: unknown): value is number => {
  // typeof で number 確認 → NaN／Infinity を除外
  return typeof value === "number" && Number.isFinite(value);
};
