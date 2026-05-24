<script setup>
import { onMounted, onUnmounted } from 'vue'
import Carousel from '../components/Carousel.vue'
import ProductCard from '../components/ProductCard.vue'

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

onMounted(() => {
  console.log(`HomeView mounted => ${props.products.length} products loaded`)
})
onUnmounted(() => {
  console.log("HomeView unmounted")
})
</script>

<template>
  <div class="max-w-5xl mx-auto p-4 md:p-8 space-y-12">
    <Carousel class="flex items-center" :images="products.map(p => p.image)" />

    <section class="space-y-6">
      <h2 class="text-xl font-black text-text-main tracking-wide flex items-center gap-2">
        <span class="w-1.5 h-5 bg-brand-red rounded-full"></span>
        Our Collection
      </h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <ProductCard
          v-for="item in products"
          :key="item.id"
          :product="item"
        />
      </div>
    </section>
  </div>
</template>
