export const BACKGROUND_TYPES = ["tate", "yoko", "naname"] as const;
export type BackgroundType = (typeof BACKGROUND_TYPES)[number];

export const LOGO_TYPES = ["test1", "test2"] as const;
export type LogoType = (typeof LOGO_TYPES)[number];

export const DEFAULT_BACKGROUND_TYPE: BackgroundType = "tate";
export const DEFAULT_LOGO_TYPE: LogoType = "test1";

export const STRENGTHS_FINDER_POSITION_OPTIONS = [
  { value: "", label: "表示なし" },
  { value: "1", label: "↖ 左上" },
  { value: "2", label: "↗ 右上" },
  { value: "3", label: "↙ 左下" },
  { value: "4", label: "↘ 右下" },
] as const;
export type StrengthsFinderPosition =
  (typeof STRENGTHS_FINDER_POSITION_OPTIONS)[number]["value"];

export const STRENGTHS_FINDER_LANGUAGE_OPTIONS = [
  { value: "ja", label: "Ja" },
  { value: "en", label: "En" },
] as const;
export type StrengthsFinderLanguage =
  (typeof STRENGTHS_FINDER_LANGUAGE_OPTIONS)[number]["value"];

export type StrengthsFinderBackgroundColor =
  "#419262" | "#2f6ec4" | "#da792d" | "#712a7d";
export type StrengthsFinderTextColor = "#000" | "#fff";

export interface StrengthsFinderTrait {
  id: number;
  name: string;
  backgroundColor: StrengthsFinderBackgroundColor;
  textColor: StrengthsFinderTextColor;
  english: string;
}

export interface VirtualBackgroundUserInfo {
  name: string;
  name_alpha: string;
  department: string;
  section: string;
  group: string;
  role: string;
  role2: string;
  role3: string;
  other1: string;
  other2: string;
  other3: string;
  email: string;
  phone: string;
  slack: string;
  url: string;
  sf_position: StrengthsFinderPosition;
  sf_lang: StrengthsFinderLanguage;
  sf: string[];
}

export const STRENGTHS_FINDER_TRAITS = [
  {
    id: 1,
    name: "分析思考",
    backgroundColor: "#419262",
    textColor: "#000",
    english: "Analytical",
  },
  {
    id: 2,
    name: "原点思考",
    backgroundColor: "#419262",
    textColor: "#000",
    english: "Context",
  },
  {
    id: 3,
    name: "未来志向",
    backgroundColor: "#419262",
    textColor: "#000",
    english: "Futuristic",
  },
  {
    id: 4,
    name: "着想",
    backgroundColor: "#419262",
    textColor: "#000",
    english: "Ideation",
  },
  {
    id: 5,
    name: "収集心",
    backgroundColor: "#419262",
    textColor: "#000",
    english: "Input",
  },
  {
    id: 6,
    name: "内省",
    backgroundColor: "#419262",
    textColor: "#000",
    english: "Intellection",
  },
  {
    id: 7,
    name: "学習欲",
    backgroundColor: "#419262",
    textColor: "#000",
    english: "Learner",
  },
  {
    id: 8,
    name: "戦略性",
    backgroundColor: "#419262",
    textColor: "#000",
    english: "Strategic",
  },
  {
    id: 9,
    name: "適応性",
    backgroundColor: "#2f6ec4",
    textColor: "#fff",
    english: "Adaptability",
  },
  {
    id: 10,
    name: "運命思考",
    backgroundColor: "#2f6ec4",
    textColor: "#fff",
    english: "Connectedness",
  },
  {
    id: 11,
    name: "成長促進",
    backgroundColor: "#2f6ec4",
    textColor: "#fff",
    english: "Developer",
  },
  {
    id: 12,
    name: "共感性",
    backgroundColor: "#2f6ec4",
    textColor: "#fff",
    english: "Empathy",
  },
  {
    id: 13,
    name: "調和性",
    backgroundColor: "#2f6ec4",
    textColor: "#fff",
    english: "Harmony",
  },
  {
    id: 14,
    name: "包含",
    backgroundColor: "#2f6ec4",
    textColor: "#fff",
    english: "Includer",
  },
  {
    id: 15,
    name: "個別化",
    backgroundColor: "#2f6ec4",
    textColor: "#fff",
    english: "Individualization",
  },
  {
    id: 16,
    name: "ポジティブ",
    backgroundColor: "#2f6ec4",
    textColor: "#fff",
    english: "Positivity",
  },
  {
    id: 17,
    name: "親密性",
    backgroundColor: "#2f6ec4",
    textColor: "#fff",
    english: "Relator",
  },
  {
    id: 18,
    name: "活発性",
    backgroundColor: "#da792d",
    textColor: "#000",
    english: "Activator",
  },
  {
    id: 19,
    name: "指令性",
    backgroundColor: "#da792d",
    textColor: "#000",
    english: "Command",
  },
  {
    id: 20,
    name: "コミュニケーション",
    backgroundColor: "#da792d",
    textColor: "#000",
    english: "Communication",
  },
  {
    id: 21,
    name: "競争性",
    backgroundColor: "#da792d",
    textColor: "#000",
    english: "Competition",
  },
  {
    id: 22,
    name: "最上志向",
    backgroundColor: "#da792d",
    textColor: "#000",
    english: "Maximizer",
  },
  {
    id: 23,
    name: "自己確信",
    backgroundColor: "#da792d",
    textColor: "#000",
    english: "Self-Assurance",
  },
  {
    id: 24,
    name: "自我",
    backgroundColor: "#da792d",
    textColor: "#000",
    english: "Significance",
  },
  {
    id: 25,
    name: "社交性",
    backgroundColor: "#da792d",
    textColor: "#000",
    english: "Woo",
  },
  {
    id: 26,
    name: "達成欲",
    backgroundColor: "#712a7d",
    textColor: "#fff",
    english: "Achiever",
  },
  {
    id: 27,
    name: "アレンジ",
    backgroundColor: "#712a7d",
    textColor: "#fff",
    english: "Arranger",
  },
  {
    id: 28,
    name: "信念",
    backgroundColor: "#712a7d",
    textColor: "#fff",
    english: "Belief",
  },
  {
    id: 29,
    name: "公平性",
    backgroundColor: "#712a7d",
    textColor: "#fff",
    english: "Consistency",
  },
  {
    id: 30,
    name: "慎重さ",
    backgroundColor: "#712a7d",
    textColor: "#fff",
    english: "Deliberative",
  },
  {
    id: 31,
    name: "規律性",
    backgroundColor: "#712a7d",
    textColor: "#fff",
    english: "Discipline",
  },
  {
    id: 32,
    name: "目標志向",
    backgroundColor: "#712a7d",
    textColor: "#fff",
    english: "Focus",
  },
  {
    id: 33,
    name: "責任感",
    backgroundColor: "#712a7d",
    textColor: "#fff",
    english: "Responsibility",
  },
  {
    id: 34,
    name: "回復志向",
    backgroundColor: "#712a7d",
    textColor: "#fff",
    english: "Restorative",
  },
] as const satisfies readonly StrengthsFinderTrait[];

export const getVirtualBackgroundImagePath = (
  backgroundType: BackgroundType,
  logoType: LogoType
) => `/background/${backgroundType}-${logoType}.png`;

export const createInitialVirtualBackgroundUserInfo =
  (): VirtualBackgroundUserInfo => ({
    name: "虎ノ門 太郎",
    name_alpha: "Taro Toranomon",
    department: "虎ノ門事業部",
    section: "虎ノ門セクション",
    group: "虎ノ門グループ",
    role: "",
    role2: "",
    role3: "",
    other1: "",
    other2: "",
    other3: "",
    email: "aaaaa@test.co.jp",
    phone: "999-9999-9999",
    slack: "aaaaa",
    url: "http://localhost:3000/back",
    sf_position: "",
    sf_lang: "ja",
    sf: Array.from({ length: 10 }, () => ""),
  });
