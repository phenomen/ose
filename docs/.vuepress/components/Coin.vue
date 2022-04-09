<script setup>
defineProps({
  v: {
    type: Number,
    required: true,
    default: "1",
  },
  t: {
    type: String,
    required: false,
    default: "g",
  },
});
</script>

<template>
  <div class="block">
    {{ Number.parseInt(v).toLocaleString("ru-RU")
    }}<span class="coin" :class="t" v-if="t === 'p'">пм</span
    ><span class="coin" :class="t" v-else-if="t === 'c'">мм</span
    ><span class="coin" :class="t" v-else-if="t === 'e'">эм</span
    ><span class="coin" :class="t" v-else-if="t === 's'">см</span
    ><span class="coin" :class="t" v-else>зм</span>
  </div>
</template>