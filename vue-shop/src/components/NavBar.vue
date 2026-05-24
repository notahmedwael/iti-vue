<script setup>
import { onMounted, onUnmounted } from 'vue'

defineProps({
  totalItemsStock: {
    type: Number,
    required: true
  }
})

onMounted(() => console.log("NavBar.vue mounted"))
onUnmounted(() => console.log("NavBar.vue unmounted"))
</script>

<template>
  <nav class="navbar bg-ui-surface border-b border-cream-700 sticky top-0 z-50 px-4 md:px-8 shadow-sm">
    <div class="flex-1">
      <RouterLink to="/" class="text-xl font-black tracking-tight text-brand-red hover:opacity-80">
        VUE-SHOP
      </RouterLink>
    </div>
    <div class="flex gap-4 font-bold text-sm">
      <RouterLink to="/" class="transition hover:opacity-80" active-class="text-brand-red">Home</RouterLink>
      <RouterLink :to="{ name: 'product-detail', params: { id: 1 } }" class="transition hover:opacity-80" active-class="text-brand-red">Sample Product</RouterLink>
      <RouterLink to="/about" class="transition hover:opacity-80" active-class="text-brand-red">About</RouterLink>
      
      <div class="badge bg-brand-red gap-1 text-white py-3 px-3 font-black">
        Global Stock: {{ totalItemsStock }}
      </div>
    </div>
  </nav>
</template>
