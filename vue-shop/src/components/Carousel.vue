<script setup>
import { onMounted, onUnmounted } from 'vue'

defineProps({
  images: {
    type: Array,
    required: true
  }
})

onMounted(() => console.log("Carousel.vue mounted"))
onUnmounted(() => console.log("Carousel.vue unmounted"))

</script>

<template>
  <div class="carousel carousel-vertical h-96 rounded-box w-full gap-4 p-4 bg-ui-bg/30">
    <div
      v-for="(img, index) in images"
      :key="index"
      class="carousel-item w-lg h-[105%] overflow-hidden rounded-xl border border-cream-700 shadow-md"
    >
      <img :src="img" alt="Carousel gallery item" class="object-cover w-full h-full" />
    </div>
  </div>
</template>