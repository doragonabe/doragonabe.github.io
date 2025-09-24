<template>
  <div class="slider-container">
    <div class="slider-area">
      <div class="slider-item">
        <svg
          viewBox="0, 0, 400, 180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <clipPath id="clipPath">
            <path
              d="M 400 125 C 400 139.419 382 177 331 151 C 309 190 232.248 166.212 199 153 C 90 109.686 40 141.096 0 160 L 0 0 C 0 0 395 0 400 0"
            />
          </clipPath>
          <image
            href="~/assets/images/slide1.webp"
            height="180"
            width="400"
            fetchpriority="high"
            clip-path="url(#clipPath)"
          />
          <path
            d="M 72 121 C 47.059 121.44 22.504 128.238 0 139 L 0 160 C 68 125 110 121 199 153 C 309.969 192.899 327 157 331 151 C 380.587 177.197 400 140.086 400 125 C 400 123.952 400 125.489 400 125 C 378 158 359 154 330 146 C 289 172 217 149 199 143 C 164 130 120 118 72 121"
            fill="#39b2ff"
            opacity=".3"
          />
        </svg>
      </div>
      <div class="slider-item">
        <svg
          viewBox="0, 0, 400, 180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <clipPath id="clipPath">
            <path
              d="M 400 125 C 400 139.419 382 177 331 151 C 309 190 232.248 166.212 199 153 C 90 109.686 40 141.096 0 160 L 0 0 C 0 0 395 0 400 0"
            />
          </clipPath>
          <image
            href="~/assets/images/slide2.webp"
            height="180"
            width="400"
            fetchpriority="high"
            clip-path="url(#clipPath)"
          />
          <path
            d="M 72 121 C 47.059 121.44 22.504 128.238 0 139 L 0 160 C 68 125 110 121 199 153 C 309.969 192.899 327 157 331 151 C 380.587 177.197 400 140.086 400 125 C 400 123.952 400 125.489 400 125 C 378 158 359 154 330 146 C 289 172 217 149 199 143 C 164 130 120 118 72 121"
            fill="#39b2ff"
            opacity=".3"
          />
        </svg>
      </div>
      <div class="slider-item">
        <svg
          viewBox="0, 0, 400, 180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <clipPath id="clipPath">
            <path
              d="M 400 125 C 400 139.419 382 177 331 151 C 309 190 232.248 166.212 199 153 C 90 109.686 40 141.096 0 160 L 0 0 C 0 0 395 0 400 0"
            />
          </clipPath>
          <image
            href="~/assets/images/slide3.webp"
            height="180"
            width="400"
            fetchpriority="high"
            clip-path="url(#clipPath)"
          />
          <path
            d="M 72 121 C 47.059 121.44 22.504 128.238 0 139 L 0 160 C 68 125 110 121 199 153 C 309.969 192.899 327 157 331 151 C 380.587 177.197 400 140.086 400 125 C 400 123.952 400 125.489 400 125 C 378 158 359 154 330 146 C 289 172 217 149 199 143 C 164 130 120 118 72 121"
            fill="#39b2ff"
            opacity=".3"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<style scoped>
.slider-container {
  width: 100%;
  height: -webkit-fill-available;
}

.slider-area {
  position: relative;
  width: 100%;
  height: inherit;
}

.slider-item {
  position: absolute;
  inset: 0;
  opacity: 0;
  z-index: 0;
  animation: slideShow 15s linear infinite;
}

.slider-item:first-child {
  animation-delay: -2s;
}

.slider-item:nth-child(2) {
  animation-delay: 3s;
}

.slider-item:nth-child(3) {
  animation-delay: 8s;
}

.slider-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes slideShow {
  0% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  35% {
    opacity: 1;
  }

  45% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}
</style>
