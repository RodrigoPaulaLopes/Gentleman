<template>
  <div class="mt-4">
    <h1 class="text-center px-5 sm:text-5xl text-2xl ">Categorias em Destaque</h1>
    <div class="flex flex-col sm:flex-row px-5 justify-center gap-15 items-center mt-10 ">
      <div
        class="w-full sm:w-[500px] h-[400px] hero cursor-pointer hover:scale-105 transition-all duration-300"
        style="
          background-image: url('https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80');
          background-size: cover;
        "
      >
      <div class="hero-overlay"></div>
      <h1 class="text-white text-2xl font-medium">Camisas</h1>
    </div>
      <div
        class="w-full sm:w-[500px] h-[400px] hero cursor-pointer hover:scale-105 transition-all duration-300"
        style="
          background-image: url('https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80');
          background-size: cover;
        "
      >
      <div class="hero-overlay"></div>
      <h1 class="text-white text-2xl font-medium">Calças</h1>
    </div>
      <div
        class="w-full sm:w-[500px] h-[400px] hero cursor-pointer hover:scale-105 transition-all duration-300"
        style="
          background-image: url('https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?auto=format&fit=crop&q=80');
          background-size: cover;
        "
      >
      <div class="hero-overlay"></div>
      <h1 class="text-white text-2xl font-medium">Acessórios</h1>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardsCategoria",
};
</script>
<style></style>
