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
  <nav class="navbar bg-white border-b border-slate-200 sticky top-0 z-50 px-4 md:px-8 shadow-sm">
    <div class="flex-1">
      <RouterLink to="/" class="text-xl font-black tracking-tight text-red-600 hover:opacity-80">
        VUE-SHOP
      </RouterLink>
    </div>
    <div class="flex gap-4 font-bold text-sm">
      <RouterLink to="/" class="hover:text-red-600 transition" active-class="text-red-600">Home</RouterLink>
      <RouterLink :to="{ name: 'product-detail', params: { id: 1 } }" class="hover:text-red-600 transition" active-class="text-red-600">Sample Product</RouterLink>
      <RouterLink to="/about" class="hover:text-red-600 transition" active-class="text-red-600">About</RouterLink>
      
      <div class="badge badge-error gap-1 text-white py-3 px-3 font-black">
        Global Stock: {{ totalItemsStock }}
      </div>
    </div>
  </nav>
</template>
