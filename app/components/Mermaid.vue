<template>
  <pre :id="mermaidId" class="[&>svg]:!max-w-full">
    <slot />
  </pre>
</template>
<script lang="ts" setup>
import mermaid from "mermaid";

const mermaidId = `mermaid-${useId()}`

onMounted(() => {
  mermaid.run({ querySelector: `#${mermaidId}` })
})
</script>
