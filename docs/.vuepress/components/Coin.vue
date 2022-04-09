<script setup>
defineProps({
  v: Number,
  t: String,
});
</script>

<template>
  <div class="block">
    {{ Number.parseInt(v).toLocaleString("ru-RU")
    }}<span class="coin" :class="t" v-if="t === 'p'">пм</span
    ><span class="coin" :class="t" v-else-if="t === 'g'">зм</span
    ><span class="coin" :class="t" v-else-if="t === 'e'">эм</span
    ><span class="coin" :class="t" v-else-if="t === 's'">см</span
    ><span class="coin" :class="t" v-else>мм</span>
  </div>
</template>