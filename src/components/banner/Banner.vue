<template>
    <div
      class="hero mb-8 min-h-screen h-[600px]"
      style="background-image: url('https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=1920&q=80'); background-size: cover; background-position: center;">
      <div class="hero-overlay h-screen"></div>
      <div class="hero-content text-neutral-content text-center">
        <div class="max-w-md">
          <h1 class="mb-5  text-4xl sm:text-6xl text-white font-bold">Eleve Seu Estilo</h1>
          <p class="mb-5 text-white">
            Descubra as últimas tendências e encontre o look perfeito para você.
          </p>
          <button class="btn btn-neutral text-white" @click="$router.push('/products')">Compre nossas coleções </button>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
  name: "BannerComponent",
};
</script>
<style scoped></style>
