<script setup>












// Usage: <Coin :v=10 t="s" /> (10см) or <Coin :v=5 /> (5зм) 

defineProps({
  v: {
    type: Number,
    required: false,
    default: 0,
  },
  t: {
    type: String,
    required: false,
    default: "g",
  },
});
</script>

<template><span style="white-space: nowrap;"><span v-if="v !== 0">{{ v.toLocaleString("ru-RU") }}</span><span class="coin" :class="t"><span v-if="t === 'p'">пм</span><span v-else-if="t === 'c'">мм</span><span v-else-if="t === 'e'">эм</span><span v-else-if="t === 's'">см</span><span v-else>зм</span></span></span></template>