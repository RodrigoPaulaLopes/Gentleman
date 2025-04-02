<template>
  <div
    class="card bg-base-100 w-96 h-[700px] cursor-pointer"
    :key="product.id"
    v-for="product in products"
  >
    <figure class="h-[600px]">
      <img
        :src="product.image"
        class="w-full object-cover transform transition-all duration-300 hover:scale-105"
        alt="Shoes"
      />
    </figure>
    <div class="card-body flex flex-col justify-between">
      <h2 class="card-title text-black text-xl font-medium">
        {{ product.title.slice(0, 20) }}
      </h2>
      <span class="text-black text-lg font-medium">R$ {{ product.price }}</span>
      <div
        class="visible absolute top-4 right-4 rounded-full text-center bg-orange-50 p-2 flex items-center justify-center shadow-2xl cursor-pointer"
        @click="toogleIcon"
      >
        <i :class="type_icone" class="fa-heart text-lg text-neutral-500"></i>
      </div>
      <div class="card-actions justify-between items-center mt-auto">
        <button class="btn btn-neutral w-full">
          <i class="fas fa-shopping-cart"></i> Adicionar ao carrinho
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProductItem",
  props: {
    products: {
      type: Array,
      required: true,
    },
    toogleIcon: {
        type: Function,
        required: true
    },
    type_icone: {
        type: String,
        required: true
    }
  },
};
</script>
