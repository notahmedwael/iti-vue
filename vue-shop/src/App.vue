<script setup>
import { ref, computed } from 'vue'

const product = ref({
  id: 1,
  name: "Cozy Sneakers",
  description: "High-quality sneakers that go with everything you wear.",
  image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  badge: "HOTSALE",
  price: 120,
  discount: 20,
  tags: ["Fashion", "Casual", "Sport"],
  isAvailable: true
})

const relatedProducts = ref([
  {
    id: 2,
    name: "Running Shoes",
    price: 90,
    discount: 10,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Casual Boots",
    price: 150,
    discount: 0,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Flip Flops",
    price: 30,
    discount: 50,
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
])

const uiLabels = ref({
  vueShop: "Lab 1 Vue Shop",
  discountInputLabel: "Discount %",
  stockToggleLabel: "In Stock",
  outOfStockBadge: "OUT OF STOCK",
  buttonAddToCart: "Add to Cart",
  buttonUnavailable: "Temporarily Unavailable",
  relatedSectionTitle: "Related Products"
})

const discountedPrice = computed(() => {
  const original = product.value.price
  const pct = product.value.discount
  return original - (original * (pct / 100))
})

const getRelatedDiscountedPrice = (item) => {
  return item.price - (item.price * (item.discount / 100))
}
</script>

<template>
  <div class="min-h-screen p-4 md:p-8 font-sans selection:bg-brand-red selection:text-white">
    <div class="max-w-5xl mx-auto space-y-12">
      
      <div class="bg-ui-surface p-4 rounded-box shadow-sm flex flex-wrap gap-4 items-center justify-between border border-cream-700 text-text-main">
        <div class="text-sm font-black uppercase tracking-wider">{{ uiLabels.vueShop }}</div>
        <div class="flex gap-4 items-center">
          <label class="input bg-ui-bg border-cream-700 input-sm flex items-center gap-2 font-medium">
            {{ uiLabels.discountInputLabel }}
            <input type="number" v-model="product.discount" class="w-16 text-brand-red font-bold focus:outline-none" min="0" max="100" />
          </label>
          <label class="label cursor-pointer gap-2 select-none">
            <span class="label-text font-bold text-text-main">{{ uiLabels.stockToggleLabel }}</span>
            <input type="checkbox" v-model="product.isAvailable" class="toggle border-ui-dark checked:bg-brand-red checked:border-brand-red toggle-sm" />
          </label>
        </div>
      </div>

      <main class="card lg:card-side bg-ui-surface shadow-xl border border-cream-700 overflow-hidden text-text-main">
        <figure class="lg:w-1/2 bg-ui-dark border-b lg:border-b-0 lg:border-r border-cream-700">
          <img :src="product.image" :alt="product.name" class="w-full h-full object-cover max-h-96 lg:max-h-full" />
        </figure>

        <div class="card-body lg:w-1/2 justify-between p-6 md:p-8">
          <div>
            <div class="flex gap-2 mb-3">
              <div v-if="product.badge" class="badge bg-brand-red border-brand-red text-white font-black text-xs px-3 py-2">
                {{ product.badge }}
              </div>

              <div v-if="!product.isAvailable" class="badge bg-ui-dark border-ui-dark text-brand-cream font-black text-xs px-3 py-2 animate-pulse">
                {{ uiLabels.outOfStockBadge }}
              </div>
            </div>

            <h1 class="card-title text-4xl font-black tracking-tight mb-2 text-ui-dark">{{ product.name }}</h1>
            <p class="text-text-muted text-base leading-relaxed mb-6 font-medium">{{ product.description }}</p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="(tag, index) in product.tags" :key="index" class="badge border-ui-dark/30 text-text-main font-semibold bg-ui-bg/50">
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="border-t border-cream-700/60 pt-6">
            <div class="flex items-baseline gap-3 mb-6">
              <span class="text-4xl font-black text-brand-red">${{ discountedPrice }}</span>
              <span v-if="product.discount > 0" class="text-xl line-through text-text-muted/60 font-bold">
                ${{ product.price }}
              </span>
            </div>

            <div class="card-actions">
              <button
                :disabled="!product.isAvailable"
                class="btn btn-block text-lg font-black transition-all duration-200 border-none rounded-xl"
                :class="product.isAvailable
                  ? 'bg-brand-red text-white hover:bg-red-700 shadow-md hover:shadow-lg'
                  : 'bg-ui-dark/10 text-text-muted/40'"
              >
                {{ product.isAvailable ? uiLabels.buttonAddToCart : uiLabels.buttonUnavailable }}
              </button>
            </div>
          </div>
        </div>
      </main>

      <section>
        <h2 class="text-2xl font-black mb-6 text-ui-dark tracking-wide flex items-center gap-2">
          <span class="w-2 h-6 bg-brand-red rounded-full"></span>
          {{ uiLabels.relatedSectionTitle }}
        </h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div v-for="item in relatedProducts" :key="item.id" class="card bg-ui-surface shadow-md border border-cream-700 image-full max-h-48 before:bg-ui-dark/70!">
            <figure><img :src="item.image" :alt="item.name" class="object-cover w-full h-full" /></figure>
            <div class="card-body justify-end p-5">
              <h3 class="card-title text-lg text-cream-100 font-black tracking-wide">{{ item.name }}</h3>
              
              <div class="flex items-baseline gap-2 mt-1">
                <span class="text-xl font-black text-brand-cream">
                  ${{ item.discount > 0 ? getRelatedDiscountedPrice(item) : item.price }}
                </span>
                <span v-if="item.discount > 0" class="text-sm line-through text-cream-100/50 font-bold">
                  ${{ item.price }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>
