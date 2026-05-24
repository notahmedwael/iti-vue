<script setup>
import { computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['buy'])

const discountedPrice = computed(() => {
  const original = props.product.price
  const dsc = props.product.discount || 0
  return (original - (original * (dsc / 100))).toFixed(0)
})

onMounted(() => console.log(`ProductDetails.vue mounted`))
onUnmounted(() => console.log(`ProductDetails.vue unmounted`))
</script>

<template>
  <div class="card lg:card-side bg-ui-surface border border-cream-700 shadow-xl overflow-hidden">
    <figure class="lg:w-1/2 bg-ui-bg max-h-96 lg:max-h-full">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
    </figure>

    <div class="card-body lg:w-1/2 justify-between p-6 md:p-8 space-y-6">
      <div class="space-y-4">
        <div class="flex gap-2">
          <span v-if="product.badge" class="badge bg-brand-red text-white font-black px-3 py-2.5 text-xs">{{ product.badge }}</span>
          <span v-if="product.stock === 0" class="badge bg-ui-dark border-none text-white font-black px-3 py-2.5 text-xs">OUT OF STOCK</span>
        </div>

        <h1 class="text-3xl md:text-4xl font-black text-text-main tracking-tight">{{ product.name }}</h1>
        <p class="text-text-muted leading-relaxed text-sm font-medium">{{ product.description }}</p>
        
        <div class="flex flex-wrap gap-1.5 pt-2">
          <span v-for="(tag, i) in product.tags" :key="i" class="badge badge-neutral text-xs font-semibold px-2.5 py-2 bg-ui-bg text-text-muted border-none">
            #{{ tag }}
          </span>
        </div>
      </div>

      <div class="border-t border-cream-700 pt-6 space-y-4">
        <div class="flex items-center justify-between">
          <div class="flex items-baseline gap-3">
            <span class="text-4xl font-black text-brand-red">${{ discountedPrice }}</span>
            <span v-if="product.discount > 0" class="text-lg line-through text-text-muted font-bold">${{ product.price }}</span>
          </div>
          <div class="text-sm font-black tracking-wide" :class="product.stock > 0 ? 'text-emerald-600' : 'text-brand-red'">
            {{ product.stock > 0 ? `In Stock: ${product.stock} units` : 'Unavailable' }}
          </div>
        </div>

        <div class="card-actions">
          <!-- Disables dynamically upon depletion and triggers structural event emits -->
          <button
            :disabled="product.stock === 0"
            @click="emit('buy', product.id)"
            class="btn btn-block text-base font-black transition rounded-xl border-none text-white shadow-sm"
            :class="product.stock > 0 ? 'bg-brand-red hover:opacity-90' : 'bg-ui-bg text-text-muted cursor-not-allowed'"
          >
            {{ product.stock > 0 ? 'Buy Now' : 'Out of Stock' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>