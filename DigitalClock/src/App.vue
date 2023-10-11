<script setup>
import ActualHour from './components/ActualHour.vue'
</script>

<template>
  <div class="bigclock">
    <div class="clock">
      <ActualHour />
    </div>
  </div>
</template>

<style scoped>
.clock {
  border-radius: 15px;
  width: 30rem;
  height: 10rem;
  display: flex;
  background-color: black;
  align-items: center;
  align-self: center;

}

.bigclock {
  border: 3rem solid rgb(61, 65, 64);
  width: 30rem;
  height: 10rem;
}

template {
  align-items: center;
  align-self: center;
  display: flex;
}
</style>
