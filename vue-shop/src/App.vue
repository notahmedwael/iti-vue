<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'

const products = ref([
  {
    "id": 1,
    "name": "Cozy Sneakers",
    "description": "High-quality sneakers that go with everything you wear.",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "badge": "NEW",
    "price": 120,
    "discount": 20,
    "stock": 10,
    "tags": ["Fashion", "Casual", "Sport"]
  },
  {
    "id": 2,
    "name": "Running Shoes",
    "description": "Built for speed and comfort on any terrain.",
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "badge": "",
    "price": 90,
    "discount": 10,
    "stock": 5,
    "tags": ["Sport", "Running"]
  },
  {
    "id": 3,
    "name": "Casual Boots",
    "description": "Rugged boots for everyday adventures.",
    "image": "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "badge": "SALE",
    "price": 150,
    "discount": 0,
    "stock": 8,
    "tags": ["Casual", "Winter"]
  },
  {
    "id": 4,
    "name": "Flip Flops",
    "description": "Light and breezy for sunny days.",
    "image": "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "badge": "",
    "price": 30,
    "discount": 50,
    "stock": 20,
    "tags": ["Summer", "Casual"]
  }
])

const totalStock = computed(() => {
  return products.value.reduce((acc, curr) => acc + curr.stock, 0)
})

const handleBuyProduct = (productId) => {
  const target = products.value.find(p => p.id === productId)
  if (target && target.stock > 0) {
    target.stock--
    console.log(`From app.vue Stock updated for ID ${productId}: ${target.stock} left`)
  }
}

onMounted(() => console.log("App.vue mounted"))
onUnmounted(() => console.log("App.vue unmounted"))
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col font-sans">
    <NavBar :total-items-stock="totalStock" />
    
    <div class="grow">
      <RouterView :products="products" @buy="handleBuyProduct" />
    </div>
  </div>
</template>
