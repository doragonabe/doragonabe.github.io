<template>
  <div class="my-3 rounded-xl bg-gray-100 p-4">
    <div class="overflow-auto">
      <canvas
        class="h-[540px] w-[960px]"
        ref="previewCanvas"
        height="1080"
        width="1920"
      ></canvas>
    </div>
  </div>

  <div class="my-5 flex">
    <button
      class="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
      @click="downloadBackground"
    >
      背景画像をダウンロードする
    </button>
    <img
      v-show="false"
      :src="qrcode"
    />
  </div>
</template>
<script lang="ts" setup>
import { useQRCode } from "@vueuse/integrations/useQRCode";

interface StrengthsFinder {
  id: number;
  name: string;
  bg_color: "#419262" | "#2f6ec4" | "#da792d" | "#712a7d";
  color: "#000" | "#fff";
  english: string;
}

const strengthsList: StrengthsFinder[] = [
  {
    id: 1,
    name: "分析思考",
    bg_color: "#419262",
    color: "#000",
    english: "Analytical",
  },
  {
    id: 2,
    name: "原点思考",
    bg_color: "#419262",
    color: "#000",
    english: "Context",
  },
  {
    id: 3,
    name: "未来志向",
    bg_color: "#419262",
    color: "#000",
    english: "Futuristic",
  },
  {
    id: 4,
    name: "着想",
    bg_color: "#419262",
    color: "#000",
    english: "Ideation",
  },
  {
    id: 5,
    name: "収集心",
    bg_color: "#419262",
    color: "#000",
    english: "Input",
  },
  {
    id: 6,
    name: "内省",
    bg_color: "#419262",
    color: "#000",
    english: "Intellection",
  },
  {
    id: 7,
    name: "学習欲",
    bg_color: "#419262",
    color: "#000",
    english: "Learner",
  },
  {
    id: 8,
    name: "戦略性",
    bg_color: "#419262",
    color: "#000",
    english: "Strategic",
  },
  {
    id: 9,
    name: "適応性",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Adaptability",
  },
  {
    id: 10,
    name: "運命思考",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Connectedness",
  },
  {
    id: 11,
    name: "成長促進",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Developer",
  },
  {
    id: 12,
    name: "共感性",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Empathy",
  },
  {
    id: 13,
    name: "調和性",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Harmony",
  },
  {
    id: 14,
    name: "包含",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Includer",
  },
  {
    id: 15,
    name: "個別化",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Individualization",
  },
  {
    id: 16,
    name: "ポジティブ",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Positivity",
  },
  {
    id: 17,
    name: "親密性",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Relator",
  },
  {
    id: 18,
    name: "活発性",
    bg_color: "#da792d",
    color: "#000",
    english: "Activator",
  },
  {
    id: 19,
    name: "指令性",
    bg_color: "#da792d",
    color: "#000",
    english: "Command",
  },
  {
    id: 20,
    name: "コミュニケーション",
    bg_color: "#da792d",
    color: "#000",
    english: "Communication",
  },
  {
    id: 21,
    name: "競争性",
    bg_color: "#da792d",
    color: "#000",
    english: "Competition",
  },
  {
    id: 22,
    name: "最上志向",
    bg_color: "#da792d",
    color: "#000",
    english: "Maximizer",
  },
  {
    id: 23,
    name: "自己確信",
    bg_color: "#da792d",
    color: "#000",
    english: "Self-Assurance",
  },
  {
    id: 24,
    name: "自我",
    bg_color: "#da792d",
    color: "#000",
    english: "Significance",
  },
  {
    id: 25,
    name: "社交性",
    bg_color: "#da792d",
    color: "#000",
    english: "Woo",
  },
  {
    id: 26,
    name: "達成欲",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Achiever",
  },
  {
    id: 27,
    name: "アレンジ",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Arranger",
  },
  {
    id: 28,
    name: "信念",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Belief",
  },
  {
    id: 29,
    name: "公平性",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Consistency",
  },
  {
    id: 30,
    name: "慎重さ",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Deliberative",
  },
  {
    id: 31,
    name: "規律性",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Discipline",
  },
  {
    id: 32,
    name: "目標志向",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Focus",
  },
  {
    id: 33,
    name: "責任感",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Responsibility",
  },
  {
    id: 34,
    name: "回復志向",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Restorative",
  },
];

const { backgroundType, logoType } = defineProps<{
  backgroundType: string;
  logoType: string;
}>();

const userInfo = defineModel<{
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
  sf_position: string;
  sf_lang: string;
  sf: string[];
}>({
  required: true,
});

const previewCanvas = ref<HTMLCanvasElement>();

function loadImageFromUrl(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // 同一オリジンなら保険的に
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function loadBackground(bgType: string, logo: string) {
  const src = `/background/${bgType}-${logo}.png`; // public/ 直下参照
  return await loadImageFromUrl(src);
}

const text = shallowRef(userInfo.value.url);
const qrcode = useQRCode(text, { width: 160, margin: 0 });

const updatePreview = async () => {
  const canvas = previewCanvas.value;
  if (!canvas) {
    return;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  const bg = await loadBackground(backgroundType, logoType);
  canvas.width = bg.width || 1920;
  canvas.height = bg.height || 1080;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

  // 色
  if (backgroundType === "yoko") {
    ctx.fillStyle = "black";
  } else {
    ctx.fillStyle = "white";
  }

  // 事業部 + セクション + グループ
  if (
    userInfo.value.department ||
    userInfo.value.section ||
    userInfo.value.group
  ) {
    const department = [
      userInfo.value.department,
      userInfo.value.section,
      userInfo.value.group,
    ]
      .join("  ")
      .trimEnd();
    ctx.font = "24px YuGothic";
    ctx.textAlign = "right";
    ctx.fillText(department, canvas.width - 80, 360);
  }

  // 役職
  if (userInfo.value.role) {
    const role = [
      userInfo.value.role,
      userInfo.value.role2,
      userInfo.value.role3,
    ]
      .join("  ")
      .trimEnd();
    ctx.font = "24px YuGothic";
    ctx.textAlign = "right";
    ctx.fillText(role, canvas.width - 80, 405);
  }

  // 予備
  if (userInfo.value.other1) {
    const other = [
      userInfo.value.other1,
      userInfo.value.other2,
      userInfo.value.other3,
    ]
      .join("  ")
      .trimEnd();
    ctx.font = "24px YuGothic";
    ctx.textAlign = "right";
    ctx.fillText(other, canvas.width - 80, 450);
  }

  // 名前
  if (userInfo.value.name) {
    ctx.font = "bold 78px YuGothic";
    ctx.textAlign = "right";
    drawTextWithSpacingAlignRight(
      ctx,
      userInfo.value.name,
      canvas.width - 80,
      560,
      8
    );
  }

  // 名前(alphabet)
  if (userInfo.value.name_alpha) {
    ctx.font = "bolder 32px YuGothic";
    ctx.textAlign = "right";
    ctx.fillText(userInfo.value.name_alpha, canvas.width - 80, 620);
  }

  let y = 770;

  // slack
  if (userInfo.value.slack) {
    ctx.font = " 28px YuGothic";
    ctx.textAlign = "right";
    ctx.fillText("Slack : @" + userInfo.value.slack, canvas.width - 80, y);
    y += 50;
  }
  // メールアドレス
  if (userInfo.value.email) {
    ctx.font = " 28px YuGothic";
    ctx.textAlign = "right";
    ctx.fillText("Mail : " + userInfo.value.email, canvas.width - 80, y);
    y += 50;
  }

  // 電話番号
  if (userInfo.value.phone) {
    ctx.font = " 28px YuGothic";
    ctx.textAlign = "right";
    ctx.fillText("Phone : ${}" + userInfo.value.phone, canvas.width - 80, y);
  }

  // URL
  if (userInfo.value.url) {
    text.value = userInfo.value.url;
  }

  // sf
  if (userInfo.value.sf_position) {
    const width = 100;
    const height = 34;

    const sf_x =
      userInfo.value.sf_position === "1" || userInfo.value.sf_position === "3"
        ? 16
        : 1360;
    const sf_y =
      userInfo.value.sf_position === "1" || userInfo.value.sf_position === "2"
        ? 16
        : 980;

    for (let i = 0; i < 10; i++) {
      if (userInfo.value.sf[i]) {
        const sf = strengthsList.find(
          (strength: any) => strength.name === userInfo.value.sf[i]
        );
        if (sf) {
          sfBox(
            ctx,
            sf_x + (width + 10) * (i % 5),
            sf_y + (height + 10) * Math.floor(i / 5),
            width,
            height,
            sf,
            userInfo.value.sf_lang
          );
        }
      }
    }
  }

  return ctx;
};

function sfBox(
  ctx: any,
  x: number,
  y: number,
  width: number,
  height: number,
  sf: StrengthsFinder,
  lang: string
) {
  ctx.fillStyle = sf.bg_color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x + width, y + height);
  ctx.lineTo(x, y + height);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = sf.color;
  ctx.font = lang === "ja" ? "bold 18px YuGothic" : "14px YuGothic";
  ctx.textAlign = "center";

  const text = lang === "ja" ? sf.name.slice(0, 5) : sf.english.slice(0, 12);
  ctx.fillText(text, x + width / 2, y + height / 2 + 6);
}

const downloadBackground = () => {
  const canvas = previewCanvas.value;
  if (!canvas) {
    return;
  }

  const dataUrl = canvas.toDataURL("image/png", 1.0);

  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = "virtual-background.png";
  link.click();
  link.remove();
};

function drawTextWithSpacingAlignRight(
  ctx: any,
  text: string,
  x: number,
  y: number,
  letterSpacing: number
) {
  let currentPosition = x;
  const chars = Array.from(text);
  chars.reverse();
  for (const char of chars) {
    ctx.fillText(char, currentPosition, y);
    const charWidth = ctx.measureText(char).width;
    currentPosition -= charWidth + letterSpacing;
  }
}

onMounted(async () => {
  const ctx = await updatePreview();
  if (!ctx) {
    return;
  }

  const qr_image = new Image();
  qr_image.src = qrcode.value;
  ctx.drawImage(qr_image, 205, 750);
});

watch(
  () => backgroundType,
  async () => {
    const ctx = await updatePreview();
    if (!ctx) {
      return;
    }

    const qr_image = new Image();
    qr_image.src = qrcode.value;
    ctx.drawImage(qr_image, 205, 750);
  }
);
watch(
  () => logoType,
  async () => {
    const ctx = await updatePreview();
    if (!ctx) {
      return;
    }

    const qr_image = new Image();
    qr_image.src = qrcode.value;
    ctx.drawImage(qr_image, 205, 750);
  }
);
watch(
  () => userInfo,
  async () => {
    const ctx = await updatePreview();
    if (!ctx) {
      return;
    }

    const qr_image = new Image();
    qr_image.src = qrcode.value;
    ctx.drawImage(qr_image, 205, 750);
  },
  { deep: true }
);

watch(qrcode, async () => {
  const ctx = await updatePreview();
  if (!ctx) {
    return;
  }

  const qr_image = new Image();
  qr_image.src = qrcode.value;
  ctx.drawImage(qr_image, 205, 750);
});
</script>
