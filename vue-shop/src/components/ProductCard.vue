<script setup>
import { onMounted, onUnmounted } from 'vue'

defineProps({
  product: {
    type: Object,
    required: true
  }
})

onMounted(() => console.log(`ProductCard.vue mounted`))
onUnmounted(() => console.log(`ProductCard.vue unmounted`))
</script>

<template>
  <div class="card bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between transition hover:shadow-md">
    <figure class="h-48 bg-slate-100 relative">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
      <div v-if="product.badge" class="absolute top-3 right-3 badge badge-error text-white font-black text-xs px-2.5 py-2">
        {{ product.badge }}
      </div>
    </figure>
    
    <div class="p-4 space-y-3 grow flex flex-col justify-between">
      <div>
        <h3 class="text-base font-black tracking-wide truncate text-slate-800">{{ product.name }}</h3>
        <p class="text-sm text-slate-500 line-clamp-1 mt-1">{{ product.description }}</p>
      </div>
      
      <div class="flex items-center justify-between pt-2">
        <div class="flex items-baseline gap-1.5">
          <span class="text-lg font-black text-red-600">
            ${{ product.discount > 0 ? (product.price - (product.price * (product.discount / 100))).toFixed(0) : product.price }}
          </span>
          <span v-if="product.discount > 0" class="text-xs line-through text-slate-400 font-bold">
            ${{ product.price }}
          </span>
        </div>
        <div class="text-xs font-bold" :class="product.stock > 0 ? 'text-emerald-600' : 'text-red-500'">
          {{ product.stock > 0 ? `${product.stock} left` : 'Out of Stock' }}
        </div>
      </div>
    </div>

    <div class="px-4 pb-4">
      <RouterLink
        :to="{ name: 'product-detail', params: { id: product.id } }"
        class="btn btn-sm btn-block bg-slate-900 border-none text-white font-bold rounded-lg hover:bg-slate-700"
      >
        View Product
      </RouterLink>
    </div>
  </div>
</template>
