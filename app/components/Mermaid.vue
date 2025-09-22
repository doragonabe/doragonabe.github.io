<template>
  <pre
    class="[&>svg]:!max-w-full"
    :id="mermaidId"
  >
    <slot />
  </pre>
</template>
<script lang="ts" setup>
import mermaid from "mermaid";

const mermaidId = `mermaid-${useId()}`;

onMounted(() => {
  mermaid.run({ querySelector: `#${mermaidId}` });
});
</script>
