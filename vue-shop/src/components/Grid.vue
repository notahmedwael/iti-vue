<script setup>
defineProps({
  products: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    default: 'Welcome To My Vue Shop',
    required: true
  }
})
</script>

<template>
  <section class="space-y-6">
    <h2 class="text-2xl font-black text-ui-dark tracking-wide flex items-center gap-2">
      <span class="w-2 h-6 bg-brand-red rounded-full"></span>
      {{ title }}
    </h2>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <ProductCard
        v-for="item in products"
        :key="item.id"
        :product="item"
      />
    </div>
  </section>
</template>