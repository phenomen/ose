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

<style>
.block {
  display: inline-block;
}

.coin {
  padding: 0.15rem;
  border-radius: 100%;
  font-size: 14px;
  font-weight: 600;
  color: black;
  margin-left: 1px;
}
.coin.p {
  background-color: #94a3b8;
}
.coin.g {
  background-color: #fcd34d;
}
.coin.e {
  background-color: #7dd3fc;
}
.coin.s {
  background-color: #cbd5e1;
}
.coin.c {
  background-color: #d97706;
}
</style>
