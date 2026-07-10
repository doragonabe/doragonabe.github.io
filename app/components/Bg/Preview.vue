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
      type="button"
    >
      背景画像をダウンロードする
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useQRCode } from "@vueuse/integrations/useQRCode";
import type {
  BackgroundType,
  LogoType,
  StrengthsFinderLanguage,
  StrengthsFinderPosition,
  StrengthsFinderTrait,
  VirtualBackgroundUserInfo,
} from "~/utils/virtualBackground";
import {
  STRENGTHS_FINDER_TRAITS,
  getVirtualBackgroundImagePath,
} from "~/utils/virtualBackground";

const CANVAS_FALLBACK_WIDTH = 1920;
const CANVAS_FALLBACK_HEIGHT = 1080;
const RIGHT_MARGIN = 80;
const QR_CODE_POSITION = { x: 205, y: 750 } as const;
const STRENGTH_BOX = { width: 100, height: 34, gap: 10 } as const;

const TEXT_COLOR_BY_BACKGROUND: Record<BackgroundType, string> = {
  tate: "white",
  yoko: "black",
  naname: "white",
};

const strengthsFinderTraitMap = new Map<string, StrengthsFinderTrait>(
  STRENGTHS_FINDER_TRAITS.map((trait) => [trait.name, trait])
);

const props = defineProps<{
  backgroundType: BackgroundType;
  logoType: LogoType;
}>();

const userInfo = defineModel<VirtualBackgroundUserInfo>({
  required: true,
});

const previewCanvas = ref<HTMLCanvasElement>();
const qrCodeSource = useQRCode(
  computed(() => userInfo.value.url),
  {
    width: 160,
    margin: 0,
  }
);

let renderVersion = 0;

const loadImage = (src: string) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    if (!src.startsWith("data:")) {
      image.crossOrigin = "anonymous";
    }
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
};

const loadBackgroundImage = (
  backgroundType: BackgroundType,
  logoType: LogoType
) => loadImage(getVirtualBackgroundImagePath(backgroundType, logoType));

const getCanvasContext = () => {
  const canvas = previewCanvas.value;
  const context = canvas?.getContext("2d") ?? null;

  return { canvas, context };
};

const renderPreview = async () => {
  renderVersion += 1;
  const version = renderVersion;
  const { canvas, context } = getCanvasContext();
  if (!canvas || !context) {
    return;
  }

  const background = await loadBackgroundImage(
    props.backgroundType,
    props.logoType
  );
  if (version !== renderVersion) {
    return;
  }

  canvas.width = background.width || CANVAS_FALLBACK_WIDTH;
  canvas.height = background.height || CANVAS_FALLBACK_HEIGHT;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(background, 0, 0, canvas.width, canvas.height);

  drawUserInfo(context, canvas, userInfo.value, props.backgroundType);
  await drawQrCode(context, qrCodeSource.value, userInfo.value.url, version);
};

const drawUserInfo = (
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  info: VirtualBackgroundUserInfo,
  backgroundType: BackgroundType
) => {
  context.fillStyle = TEXT_COLOR_BY_BACKGROUND[backgroundType];

  drawJoinedLine(
    context,
    canvas,
    [info.department, info.section, info.group],
    360
  );
  drawJoinedLine(context, canvas, [info.role, info.role2, info.role3], 405);
  drawJoinedLine(context, canvas, [info.other1, info.other2, info.other3], 450);
  drawName(context, canvas, info);
  drawContactInfo(context, canvas, info);
  drawStrengthsFinder(context, info);
};

const drawJoinedLine = (
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  values: string[],
  y: number
) => {
  const text = values.filter(Boolean).join("  ");
  if (!text) {
    return;
  }

  context.font = "24px YuGothic";
  context.textAlign = "right";
  context.fillText(text, canvas.width - RIGHT_MARGIN, y);
};

const drawName = (
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  info: VirtualBackgroundUserInfo
) => {
  if (info.name) {
    context.font = "bold 78px YuGothic";
    context.textAlign = "right";
    drawTextWithSpacingAlignRight(
      context,
      info.name,
      canvas.width - RIGHT_MARGIN,
      560,
      8
    );
  }

  if (info.name_alpha) {
    context.font = "bolder 32px YuGothic";
    context.textAlign = "right";
    context.fillText(info.name_alpha, canvas.width - RIGHT_MARGIN, 620);
  }
};

const drawContactInfo = (
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  info: VirtualBackgroundUserInfo
) => {
  const lines = [
    info.slack ? `Slack : @${info.slack}` : "",
    info.email ? `Mail : ${info.email}` : "",
    info.phone ? `Phone : ${info.phone}` : "",
  ].filter(Boolean);

  context.font = "28px YuGothic";
  context.textAlign = "right";

  lines.forEach((line, index) => {
    context.fillText(line, canvas.width - RIGHT_MARGIN, 770 + index * 50);
  });
};

const drawStrengthsFinder = (
  context: CanvasRenderingContext2D,
  info: VirtualBackgroundUserInfo
) => {
  if (!info.sf_position) {
    return;
  }

  const origin = getStrengthsFinderOrigin(info.sf_position);
  info.sf.slice(0, 10).forEach((traitName, index) => {
    const trait = strengthsFinderTraitMap.get(traitName);
    if (!trait) {
      return;
    }

    drawStrengthsFinderBox(
      context,
      origin.x + (STRENGTH_BOX.width + STRENGTH_BOX.gap) * (index % 5),
      origin.y +
        (STRENGTH_BOX.height + STRENGTH_BOX.gap) * Math.floor(index / 5),
      STRENGTH_BOX.width,
      STRENGTH_BOX.height,
      trait,
      info.sf_lang
    );
  });
};

const getStrengthsFinderOrigin = (position: StrengthsFinderPosition) => {
  const isLeft = position === "1" || position === "3";
  const isTop = position === "1" || position === "2";

  return {
    x: isLeft ? 16 : 1360,
    y: isTop ? 16 : 980,
  };
};

const drawStrengthsFinderBox = (
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  trait: StrengthsFinderTrait,
  language: StrengthsFinderLanguage
) => {
  context.fillStyle = trait.backgroundColor;
  context.fillRect(x, y, width, height);

  context.fillStyle = trait.textColor;
  context.font = language === "ja" ? "bold 18px YuGothic" : "14px YuGothic";
  context.textAlign = "center";

  const text =
    language === "ja" ? trait.name.slice(0, 5) : trait.english.slice(0, 12);
  context.fillText(text, x + width / 2, y + height / 2 + 6);
};

const drawQrCode = async (
  context: CanvasRenderingContext2D,
  qrCode: string,
  url: string,
  version: number
) => {
  if (!url || !qrCode) {
    return;
  }

  const qrImage = await loadImage(qrCode);
  if (version !== renderVersion) {
    return;
  }

  context.drawImage(qrImage, QR_CODE_POSITION.x, QR_CODE_POSITION.y);
};

const drawTextWithSpacingAlignRight = (
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  letterSpacing: number
) => {
  let currentPosition = x;
  const chars = Array.from(text).reverse();

  for (const char of chars) {
    context.fillText(char, currentPosition, y);
    currentPosition -= context.measureText(char).width + letterSpacing;
  }
};

const downloadBackground = () => {
  const canvas = previewCanvas.value;
  if (!canvas) {
    return;
  }

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png", 1.0);
  link.download = "virtual-background.png";
  link.click();
  link.remove();
};

onMounted(renderPreview);

watch(
  [
    () => props.backgroundType,
    () => props.logoType,
    () => userInfo.value,
    () => qrCodeSource.value,
  ],
  renderPreview,
  { deep: true }
);
</script>
