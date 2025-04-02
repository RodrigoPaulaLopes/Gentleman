<template>
  <div class="w-full px-5 sm:px-20 my-8 bg-white">
    <router-link to="/products">
      <i class="fas fa-arrow-left text-lg"></i> Voltar à loja
    </router-link>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
      <!-- Product Image -->
      <div class="relative aspect-square rounded-xl overflow-hidden">
        <img
          :src="product.image"
          :alt="product.title"
          class="absolute inset-0 w-full h-full object-fill"
        />
      </div>

      <!-- Product Info -->
      <div class="flex flex-col">
        <div class="flex-1">
          <h1 class="text-3xl font-bold text-gray-900 mb-4">
            {{ product.title }}
          </h1>
          <div
            class="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
          >
            {{
              product.category?.charAt(0).toUpperCase() +
              product.category?.slice(1)
            }}
          </div>

          <p class="text-gray-600 mb-6">{{ product.description }}</p>

          <div class="text-3xl font-bold text-gray-900 mb-8">
            R$ {{ product.price?.toFixed(2) }}
          </div>

          <!-- Shipping Info -->
          <div class="space-y-4 mb-8">
            <div class="flex items-center text-gray-600 gap-2">
              <i class="fas fa-truck"></i>
              <span>Entrega grátis em todo o Brasil</span>
            </div>
            <div class="flex items-center text-gray-600 gap-2">
              <i class="fas fa-box"></i>
              <span>Disponível para envio imediato</span>
            </div>
          </div>
          <button
            class="mt-8 w-full bg-neutral-800 text-white py-4 px-6 rounded-xl hover:bg-neutral-900 cursor-pointer transition-colors duration-200 flex items-center justify-center text-lg font-semibold"
          >
            <i class="fas fa-shopping-cart mr-2"></i>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      product: {
        image: "",
        title: "",
        category: "",
        description: "",
        price: 0,
        details: {
          color: "",
          material: "",
          dimensions: "",
          weight: "",
          features: [],
        },
      },
    };
  },
  async mounted() {
    await this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${this.$route.params.id}`
        );
        const json = await response.json();
        this.product = json;
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    },
  },
};
</script>

<style scoped></style>
