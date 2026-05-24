<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => console.log("AboutView mounted"))
onUnmounted(() => console.log("AboutView unmounted"))
</script>

<template>
  <div class="max-w-3xl mx-auto p-6 md:p-12 mt-8 card bg-ui-surface border border-cream-700 shadow-sm text-center space-y-4">
    <h1 class="text-3xl font-black text-text-main tracking-tight">About Our Store</h1>
    <div class="divider max-w-xs mx-auto my-1"></div>
    <p class="text-text-muted font-medium leading-relaxed max-w-xl mx-auto">
      This is my first vue application
    </p>
    <div class="pt-4 text-xs font-bold tracking-widest uppercase text-text-muted space-y-1">
      <p>Course Name: VueJS Course — Day 2 Lab 2</p>
      <p>Track: ITI OSAD Intake 46</p>
      <p>Student: Ahmed Wael Mohamed</p>
    </div>
  </div>
</template>
