<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import ProductDetails from '../components/ProductDetails.vue'
import ProductCard from '../components/ProductCard.vue'

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

// Intercept routing parameters
const route = useRoute()
const emit = defineEmits(['buy'])

// Dynamically isolate target object
const currentProduct = computed(() => {
  return props.products.find(p => p.id === Number(route.params.id))
})

// Isolate remaining sibling products
const relatedProducts = computed(() => {
  return props.products.filter(p => p.id !== Number(route.params.id))
})

onMounted(() => {
  console.log(`ProductView mounted for ID: ${route.params.id}`)
})
onUnmounted(() => {
  console.log("ProductView unmounted")
})
</script>

<template>
  <div class="max-w-5xl mx-auto p-4 md:p-8 space-y-12">
    
    <div v-if="currentProduct">
      <ProductDetails :product="currentProduct" @buy="(id) => emit('buy', id)" />
    </div>
    
    <div v-else class="text-center py-12 card border border-cream-700 bg-ui-surface shadow-sm">
      <h2 class="text-xl font-bold text-text-main">Requested Catalog ID Not Found</h2>
      <div class="mt-4"><RouterLink to="/" class="btn btn-sm bg-brand-red border-none text-white">Return Home</RouterLink></div>
    </div>

    <section v-if="currentProduct" class="space-y-6">
      <h2 class="text-xl font-black text-text-main tracking-wide flex items-center gap-2">
        <span class="w-1.5 h-5 bg-brand-red rounded-full"></span>
        Related Products
      </h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <ProductCard
          v-for="item in relatedProducts"
          :key="item.id"
          :product="item"
        />
      </div>
    </section>

  </div>
</template>
